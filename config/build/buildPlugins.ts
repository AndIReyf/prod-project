import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  ProgressPlugin, WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin,
} from 'webpack';

import { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev }: BuildOptions): WebpackPluginInstance[] => [
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new ProgressPlugin({
    activeModules: false,
    entries: true,
    modules: true,
    modulesCount: 5000,
    profile: false,
    dependencies: true,
    dependenciesCount: 10000,
    percentBy: null,
  }),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  new HotModuleReplacementPlugin(),
];
