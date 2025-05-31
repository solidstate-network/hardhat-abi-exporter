export default {
  '*.{js,ts,sol,json,md}': ['prettier --write'],
  '*': () => ['knip', 'knip --production'],
};
