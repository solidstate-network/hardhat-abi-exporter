import { TASK_CLEAN } from '../task_names.js';
import { overrideTask } from 'hardhat/config';

export default overrideTask(TASK_CLEAN)
  .setAction(() => import('../actions/clean.js'))
  .build();
