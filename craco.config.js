const CracoAlias = require("craco-alias");
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
              lessLoaderOptions: {
                lessOptions: {
                  modifyVars: { '@primary-color': '#1DA57A' },
                  javascriptEnabled: true,
                },
              },
            },
        },
    　　{
    　　　　plugin: CracoAlias,
    　　　　options: {
    　　　　　　source: "tsconfig",
    　　　　　　baseUrl: "./src",
    　　　　　　tsConfigPath: "./tsconfig.extend.json",
    　　　　}
    　　}
    ],
    devServer:{
        host: 'localhost',//target host
        port: 8000,
        proxy: {
            "/api": {
                target: "http://192.168.3.157:8080/api", //后台服务地址
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}