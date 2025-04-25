import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { DefinePlugin } from 'webpack';

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

    config.plugins?.push(new DefinePlugin({ __IS_DEV__: JSON.stringify(true), __API__: JSON.stringify('') }));
    config!.module!.rules?.push(cssLoader);

    if (config.resolve) {
      config.resolve.modules?.push(paths.src);
      config.resolve.extensions?.push('.ts', '.tsx');
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
};
export default config;
