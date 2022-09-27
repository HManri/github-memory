const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

const config = (env) => {
  const mode = env.mode;

  const environmentVariables = dotenv.config().parsed;
  const envKeys = Object.keys(environmentVariables).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(environmentVariables[next]);
    return prev;
  }, {});

  const configuration = {
    mode: mode,
    entry: path.resolve(__dirname, 'src', 'app', 'index.jsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
    },
    devtool: mode === 'development' ? 'eval-source-map' : false,
    devServer: {
      open: false,
      client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src/app'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
              },
            },
          ],
          include: [path.resolve(__dirname, 'src/app')],
          exclude: /node_modules/,
        },
        { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
        files: [path.resolve(__dirname, 'src/app')],
      }),
      new HtmlWebpackPlugin({
        hash: true,
        template: './src/www/index.html',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };

  if (mode !== 'production') {
    configuration.optimization = {
      // avoid extra optimization steps in development
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    };
  }

  return configuration;
};

module.exports = config;
