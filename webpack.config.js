const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  entry: './src/index.ts',
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        // add transpileOnly option if you use ts-loader < 9.3.0 
        // options: {
        //   transpileOnly: true
        // }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};