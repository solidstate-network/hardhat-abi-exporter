import { exportAbi } from '../lib/export_abi.js';
import { TASK_COMPILE } from '../task_names.js';
import type { NewTaskActionFunction } from 'hardhat/types/tasks';

interface TaskActionArguments {
  noCompile: boolean;
}

const action: NewTaskActionFunction<TaskActionArguments> = async (
  args,
  hre,
) => {
  if (hre.globalOptions.noExportAbi) return;

  if (!args.noCompile) {
    hre.globalOptions.noExportAbi = true;
    await hre.tasks.getTask(TASK_COMPILE).run();
  }

  await exportAbi(hre, hre.config.abiExporter);
};

export default action;
