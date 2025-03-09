import {Configuration} from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {resolve} from "path";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || 'development';
  const isDev = 'development' === mode;

  const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    build: resolve(__dirname, 'build'),
    html: resolve(__dirname, 'public', 'index.html'),
    src: resolve(__dirname, 'src'),
  }

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};