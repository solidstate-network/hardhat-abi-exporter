import { TASK_ABI } from '../task_names.js';
import { emptyTask } from 'hardhat/config';

export default emptyTask(TASK_ABI, 'Interact with contract ABIs').build();
