export default {
  '*.{js,ts,sol,json,md}': ['prettier --write --no-error-on-unmatched-pattern'],
  '*': () => ['knip', 'knip --strict'],
};
