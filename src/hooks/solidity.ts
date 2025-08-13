import { exportAbi } from '../lib/export_abi.js';
import type { SolidityHooks } from 'hardhat/types/hooks';

export default async (): Promise<Partial<SolidityHooks>> => ({
  onCleanUpArtifacts: async (context, artifactPaths, next) => {
    if (!context.globalOptions.noExportAbi && !context.globalOptions.coverage) {
      const entries = context.config.abiExporter.filter(
        (entry) => entry.runOnCompile,
      );

      await exportAbi(context, entries);
    }

    return next(context, artifactPaths);
  },
});
