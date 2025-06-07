import { TASK_ABI_EXPORT } from '../task_names.js';
import { task } from 'hardhat/config';

export default task(TASK_ABI_EXPORT)
  .setDescription(
    'Extract ABIs from compilation artifacts and write to a directory',
  )
  .addFlag({
    name: 'noCompile',
    description: "Don't compile before running this task",
  })
  .setAction(import.meta.resolve('../actions/abi_export.js'))
  .build();
