import { overrideTask } from 'hardhat/config';

// TODO: import task name constant
export default overrideTask('clean')
  .setAction(import.meta.resolve('../actions/clean.js'))
  .build();
