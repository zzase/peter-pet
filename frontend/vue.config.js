const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  runtimeCompiler: true,
  
  devServer: {
    overlay: false
  },
  devServer: {
    proxy: {
      '/api' :{
        target: 'http//localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        DEPLOYED_ADDRESS: JSON.stringify(fs.readFileSync('../backend/contracts/contractCA/PeterPetDidCA','utf8').replace(/\n|\r/g,"")),
        DEPLOYED_ABI : fs.existsSync('../backend/contracts/contractABI/PeterPetDidABI') && fs.readFileSync('../backend/contracts/contractABI/PeterPetDidABI','utf8'),
      }),
      new CopyWebpackPlugin([{ from: './src/App.vue'}])
    ]
  },
  outputDir: '../backend/public',
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
};