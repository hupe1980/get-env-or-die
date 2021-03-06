const { TypeScriptProject, DependenciesUpgradeMechanism, UpgradeDependenciesSchedule } = require('projen');
const project = new TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'get-env-or-die',
  description: 'Utility to get and typecast environment variables.',
  keywords: ['env', 'environment-variables'],
  repository: 'https://github.com/hupe1980/get-env-or-die.git',
  license: 'MIT',
  copyrightOwner: 'Frank Hübner',
  releaseToNpm: true,
  majorVersion: 1,
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: 'AUTOMATION_GITHUB_TOKEN',
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
  }),
  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['hupe1980'],
  },
});
project.gitignore.exclude('.DS_Store');
project.synth();