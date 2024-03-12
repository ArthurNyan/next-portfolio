module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf']],
    'scope-enum': [2, 'always', ['frontend', 'backend', 'database', 'config', 'authentication', 'deployment', 'docs', 'other']],
    'subject-case': [2, 'always', 'lower-case'],
    'body-max-length': [2, 'always', 100]
  }
};
