import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      entry: '',
      html: '',
      build: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };

    const cssLoader = buildCssLoaders(true);

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(cssLoader);

    return config;
  },
};
export default config;
