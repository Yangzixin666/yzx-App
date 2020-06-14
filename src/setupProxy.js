const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/aps', {
            target: 'http://vueshop.glbuys.com',
            changeOrigin: true,
            pathRewrite: {
                '^/aps': ''
            }
        }),
    )
}