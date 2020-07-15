const path = require('path');
function resolve(dir){
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "public",
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.111.232.105:8769/',
                changOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
            '/menu': {
                target: 'http://47.111.232.105:8769/',
                changOrigin: true,
                pathRewrite: {
                    '^/menu': '/'
                }
            },
            // '/ssm': {
            //     target: 'http://192.168.1.37:8080/',
            //     changOrigin: true,
            //     ws: true,
            //     pathRewrite: {
            //         '^/ssm': '/'
            //     }
            // }
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