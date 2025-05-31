import { TASK_CLEAN } from '../task_names.js';
import { overrideTask } from 'hardhat/config';

export default overrideTask(TASK_CLEAN)
  .setAction(import.meta.resolve('../actions/clean.js'))
  .build();
