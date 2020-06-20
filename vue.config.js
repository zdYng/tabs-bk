const path = require('path');
function resolve(dir){
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://111.229.243.100:5200/',
                changOrigin: true,
                ws: true,
            },
            '/menu': {
                target: 'http://192.168.1.17:7002/',
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