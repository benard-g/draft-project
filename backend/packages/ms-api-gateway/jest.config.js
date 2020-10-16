module.exports = {
  // Config
  testEnvironment: 'node',
  preset: 'ts-jest',
  setupFiles: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['node_modules/', 'build/'],
  // Test options
  clearMocks: true,
  // Coverage
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
};
