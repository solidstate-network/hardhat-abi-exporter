import { AbiExporterConfig, AbiExporterUserConfig } from './types.js';

declare module 'hardhat/types/config' {
  interface HardhatConfig {
    abiExporter: AbiExporterConfig;
  }

  interface HardhatUserConfig {
    abiExporter?: AbiExporterUserConfig;
  }
}

declare module 'hardhat/types/global-options' {
  interface GlobalOptions {
    noExportAbi: boolean;
    // TODO: remove type once it's added by Hardhat
    coverage: boolean;
  }
}
