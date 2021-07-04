const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'docs'),
  },
}
