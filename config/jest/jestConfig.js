const path = require('path')

module.exports = {
  preset: 'ts-jest',
  rootDir: path.resolve(__dirname, '../../'),
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePaths: [],
  resetMocks: true,
  coverageReporters: ['json', 'lcov', 'text', 'cobertura'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/__tests__/**/*', '!jest', '!src/**/*.d.ts'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],
}
