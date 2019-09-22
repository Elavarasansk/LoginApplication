const path = require('path');
module.exports = {
    entry: './src/index.js',
    output : {
       path : path.join(__dirname,'/dist'),
       filename : 'login_module_bundle.js'
    },
    devServer : {
      inline : true ,
      port : 8080
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader",
        options: {
        presets: ['@babel/react', '@babel/es2015'],
      plugins: ['@babel/proposal-class-properties']
        }
        }]
        },{
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
      ]
    }
      ]
    } 
  };