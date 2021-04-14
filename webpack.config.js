const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};

module.exports = {
    entry: './assets//css/styles.css',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};