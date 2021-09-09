const { TypeScriptProject } = require('projen');
const project = new TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'get-env-or-die',
  description: 'Utility to get and typecast environment variables.',
  repository: 'https://github.com/hupe1980/get-env-or-die.git',
  license: 'MIT',
  copyrightOwner: 'Frank Hübner',
  releaseToNpm: true,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.gitignore.exclude('.DS_Store');
project.synth();