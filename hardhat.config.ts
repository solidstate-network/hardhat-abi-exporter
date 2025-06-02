import HardhatAbiExporter from './src/index.js';
import type { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  plugins: [HardhatAbiExporter],
};

export default config;
