import { loader } from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

export const buildCssLoaders = (isDev: boolean): RuleSetRule => ({
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    isDev ? 'style-loader' : loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        modules: {
          namedExport: false,
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
        },
      },
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
});
