/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  rootDir: '../../',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  globals: {
    __IS_DEV__: true,
  },
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    'entities(.*)$': '<rootDir>/src/entities/$1',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default config;
