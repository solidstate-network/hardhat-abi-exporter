export type AbiExporterConfigEntry = {
  path: string;
  runOnCompile: boolean;
  clear: boolean;
  flat: boolean;
  only: string[];
  except: string[];
  spacing: number;
  pretty: boolean;
  filter: (
    abiElement: any,
    index: number,
    abi: any,
    sourceName: string,
    contractName: string,
  ) => boolean;
  format: 'minimal' | 'full' | 'json' | 'typescript';
  rename: (sourceName: string, contractName: string) => string;
};

export type AbiExporterUserConfigEntry = Partial<AbiExporterConfigEntry>;

export type AbiExporterConfig = AbiExporterConfigEntry[];

export type AbiExporterUserConfig =
  | AbiExporterUserConfigEntry
  | AbiExporterUserConfigEntry[];
