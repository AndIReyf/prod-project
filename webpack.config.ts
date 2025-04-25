import { resolve } from 'path';

import { Configuration } from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || 'development';
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    build: resolve(__dirname, 'build'),
    html: resolve(__dirname, 'public', 'index.html'),
    src: resolve(__dirname, 'src'),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
  });

  return config;
};
