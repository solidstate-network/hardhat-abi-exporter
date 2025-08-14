import HardhatAbiExporter from './src/index.js';
import type { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  plugins: [HardhatAbiExporter],
  solidity: {
    version: '0.8.30',
    npmFilesToBuild: ['@solidstate/contracts/interfaces/IERC20.sol'],
  },
};

export default config;
