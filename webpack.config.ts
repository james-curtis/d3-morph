import { Configuration } from 'webpack';
import WebpackBarPlugin from 'webpackbar';

const config: Configuration = {
  entry: './src/main.ts',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', 'json', '.tsx', '.ts'],
  },
  plugins: [new WebpackBarPlugin()],
  watchOptions: {
    ignored: ['**/node_modules'],
  },
  externalsPresets: { node: true },
};

export default config;
