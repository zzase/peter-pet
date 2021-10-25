const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

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
        target: 'http://210.114.18.112:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api' : ''
        },
        '/klaytn' :{
          target: 'https://metadata-api.klaytnapi.com/v1',
          pathRewrite: {
            '^/api' : ''
          }
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      // new webpack.DefinePlugin({
      //   DEPLOYED_ADDRESS: JSON.stringify(fs.readFileSync('../backend/contracts/contractCA/PeterPetDidCA','utf8').replace(/\n|\r/g,"")),
      //   DEPLOYED_ABI : fs.existsSync('../backend/contracts/contractABI/PeterPetDidABI') && fs.readFileSync('../backend/contracts/contractABI/PeterPetDidABI','utf8'),
      //   BACKEND_SERVER_URI: JSON.stringify(env.BACKEND_SERVER_URI),
      //   FRONTEND_SERVER_URI: JSON.stringify(env.FRONTEND_SERVER_URI),
      // }),
      // new CopyWebpackPlugin([{ from: './src/App.vue'}])
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