/* @ts-ignore */
const { createProxyMiddleware } = require('http-proxy-middleware');

/* @ts-ignore */
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    }),
  );
};
