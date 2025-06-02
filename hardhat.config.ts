import HardhatAbiExporter from './src/index.js';
// TODO: fix knip hardhat plugin to detect dependenciesToCompile imports
import '@solidstate/contracts';
import type { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  plugins: [HardhatAbiExporter],
  solidity: {
    version: '0.8.30',
    dependenciesToCompile: ['@solidstate/contracts/interfaces/IERC20.sol'],
  },
};

export default config;
