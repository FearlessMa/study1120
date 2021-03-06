/**
 * Created by MHC on 2017/11/20.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack =require('webpack');

module.exports=merge(common,{
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

});
