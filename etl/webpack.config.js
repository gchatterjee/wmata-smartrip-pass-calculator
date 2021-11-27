// const path = require('path')

module.exports = {
  entry: './src/index.ts',
  // output: {
  //   publicPath: path.resolve(__dirname, 'dist'),
  // },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  mode: 'development',
}
