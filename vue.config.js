const path = require('path');
function resolve(dir){
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.111.232.105:7005/',
                changOrigin: true,
                ws: true,
            },
            '/menu': {
                target: 'http://47.111.232.105:7002/',
                changOrigin: true,
                pathRewrite: {
                    '^/menu': '/'
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('./src'))
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 192
            })
    }
}