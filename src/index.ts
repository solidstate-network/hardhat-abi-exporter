import pkg from '../package.json' with { type: 'json' };
import taskClean from './tasks/clean.js';
import taskClearAbi from './tasks/clear_abi.js';
import taskExportAbi from './tasks/export_abi.js';
import './type_extensions.js';
import { globalOption } from 'hardhat/config';
import { ArgumentType } from 'hardhat/types/arguments';
import type { HardhatPlugin } from 'hardhat/types/plugins';

// TODO: clean hook

const plugin: HardhatPlugin = {
  id: pkg.name!,
  npmPackage: pkg.name!,
  dependencies: [
    async () => {
      const { default: HardhatSolidstateUtils } = await import(
        '@solidstate/hardhat-solidstate-utils'
      );
      return HardhatSolidstateUtils;
    },
  ],
  tasks: [taskClean, taskClearAbi, taskExportAbi],
  hookHandlers: {
    config: import.meta.resolve('./hooks/config.js'),
    solidity: import.meta.resolve('./hooks/solidity.js'),
  },
  globalOptions: [
    globalOption({
      name: 'noExportAbi',
      description: 'Disables ABI exporting',
      defaultValue: false,
      type: ArgumentType.BOOLEAN,
    }),
  ],
};

export default plugin;
