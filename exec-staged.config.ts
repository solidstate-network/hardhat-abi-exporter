import type { ExecStagedUserConfig } from 'exec-staged/types';

const config: ExecStagedUserConfig = [
  'knip',
  'knip --strict',
  {
    task: 'prettier --write --no-error-on-unmatched-pattern $FILES',
    glob: '*.{js,ts,sol,json,md}',
  },
];

export default config;
