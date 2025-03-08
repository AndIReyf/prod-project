import HtmlWebpackPlugin from "html-webpack-plugin";
import {ProgressPlugin, WebpackPluginInstance} from "webpack";
import {BuildPaths} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
  return [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: paths.html
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
  ]
}