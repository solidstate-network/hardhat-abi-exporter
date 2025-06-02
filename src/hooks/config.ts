import type {
  AbiExporterConfig,
  AbiExporterConfigEntry,
  AbiExporterUserConfigEntry,
} from '../types.js';
import type {
  ConfigHooks,
  HardhatUserConfigValidationError,
} from 'hardhat/types/hooks';
import path from 'path';

const DEFAULT_CONFIG: Omit<AbiExporterConfigEntry, 'format' | 'rename'> = {
  path: './abi',
  runOnCompile: false,
  clear: false,
  flat: false,
  only: [],
  except: [],
  spacing: 2,
  pretty: false,
  filter: () => true,
  // `format` is not defaulted as it may depend on `pretty` option
  // `rename` is not defaulted as it may depend on `flat` option
};

export default async (): Promise<Partial<ConfigHooks>> => ({
  validateUserConfig: async (userConfig) => {
    const errors: HardhatUserConfigValidationError[] = [];

    const userConfigEntries = [
      userConfig.abiExporter ?? (DEFAULT_CONFIG as AbiExporterUserConfigEntry),
    ].flat();

    for (let i = 0; i < userConfigEntries.length; i++) {
      const userConfigEntry = userConfigEntries[i];

      if (userConfigEntry.flat && userConfigEntry.rename) {
        errors.push({
          path: ['abiExporter', i, 'flat'],
          message: '`flat` & `rename` config cannot be specified together',
        });
      }

      if (userConfigEntry.pretty && userConfigEntry.format) {
        errors.push({
          path: ['abiExporter', i, 'pretty'],
          message: '`pretty` & `format` config cannot be specified together',
        });
      }

      if (
        userConfigEntry.format &&
        !['json', 'minimal', 'full', 'typescript'].includes(
          userConfigEntry.format,
        )
      ) {
        errors.push({
          path: ['abiExporter', i, 'format'],
          message: `invalid format: ${userConfigEntry.format}`,
        });
      }
    }

    // remove the config entry index if the user config is not an array

    if (!Array.isArray(userConfig.abiExporter)) {
      for (const error of errors) {
        error.path.splice(1, 1);
      }
    }

    return errors;
  },

  resolveUserConfig: async (userConfig, resolveConfigurationVariable, next) => {
    const abiExporter: AbiExporterConfig = [];

    const userConfigEntries = [
      userConfig.abiExporter ?? (DEFAULT_CONFIG as AbiExporterUserConfigEntry),
    ].flat();

    for (const userConfigEntry of userConfigEntries) {
      const configEntry = {
        ...DEFAULT_CONFIG,
        ...userConfigEntry,
      };

      const format =
        configEntry.format ?? (configEntry.pretty ? 'minimal' : 'json');

      const rename =
        configEntry.rename ??
        (configEntry.flat
          ? (sourceName, contractName) => contractName
          : (sourceName, contractName) => path.join(sourceName, contractName));

      abiExporter.push({
        ...configEntry,
        format,
        rename,
      });
    }

    return {
      ...(await next(userConfig, resolveConfigurationVariable)),
      abiExporter,
    };
  },
});
