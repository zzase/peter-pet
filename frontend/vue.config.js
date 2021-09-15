module.exports = {
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
  outputDir: '../backend/public',
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  },
};