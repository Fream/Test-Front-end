module.exports = {
  devServer: {
      proxy: {
          '^/public': {
              target: 'https://dev.alcotec.com.ua/'
          }
      },
  },
};