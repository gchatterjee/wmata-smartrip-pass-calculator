const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../docs'),
  },
  devServer: {
    static: path.join(__dirname, '../docs'),
    compress: true,
    port: 9000,
  },
  mode: 'development',
}
