import { TASK_CLEAR_ABI } from '../task_names.js';
import { task } from 'hardhat/config';

export default task(TASK_CLEAR_ABI)
  .setDescription('Remove extracted ABIs')
  .setAction(import.meta.resolve('../actions/clear_abi.js'))
  .build();
