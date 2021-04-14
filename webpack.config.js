const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};

module.exports = {
    entry: {
      'bundle.min.css': [
        __dirname + '/assets/css/styles.css',
        __dirname + '/src/styles/xyz.css',
        __dirname + '/src/styles/mno.css'
      ]
    },
    devtool: '',
    output: {
      path: __dirname + '/dist/styles/',
      filename: '[name]'
  
    },
    module: {
      rules: [{
          test: /\.css$/i,
          use: extractCSS.extract({
            use: {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          })
      }]
    },
    resolve: {
      alias: {},
      modules: [],
      extensions: ['.css']
    },
    plugins: [
      extractCSS
    ]
  };