// eslint-disable-next-line no-undef
globalThis.ngJest = {
  skipNgcc: true,
  tsconfig: 'tsconfig.spec.json'
};
module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  setupFilesAfterEnv: ['<rootDir>/setup.js'],
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html$',
      isolatedModules: true,
    }
  },
  testRunner: 'jest-jasmine2',
  moduleNameMapper: {
    'six-my-lib-1': '<rootDir>/projects/my-lib-1/src/index.ts'
  },
  transformIgnorePatterns: [],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'projects/lib/*.{js}'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  reporters: ['jest-standard-reporter', 'jest-junit'],
  collectCoverage: true,
  coverageDirectory: './target/coverage',
  collectCoverageFrom: ['src/lib/**/*.ts'],
  coveragePathIgnorePatterns: ['.*enum.ts', '.*module.ts']
};
