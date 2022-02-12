const path = require('path');

const configs = {
  entry: {
    crud: {
    import: './src/crud.ts',
    dependOn:"libs"
  },
    libs: ["galhui", "galho", "orray","entity","inutil"],
  },
  devtool: 'inline-source-map',
  watch: true,
  // watchOptions: {},
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
}
function debug() {
  return Object.assign(configs, {
    mode: 'development',
  });
}
function release() {
  return Object.assign(configs, {
    mode: 'production',
    optimization: {
      usedExports: true,
    },
  });
}
module.exports = debug();