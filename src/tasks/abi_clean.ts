import { TASK_ABI_CLEAN } from '../task_names.js';
import { task } from 'hardhat/config';

export default task(TASK_ABI_CLEAN)
  .setDescription('Remove extracted ABIs')
  .setAction(() => import('../actions/abi_clean.js'))
  .build();
