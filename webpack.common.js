/**
 * Created by MHC on 2017/11/20.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={

    entry: {
      main: path.join(__dirname, './index.js')
    },
    output:{
      filename:'[name][hash].js',
      path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_moudles/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[['es2015'],['react']]
                        }
                    }
                ]
            },
            {
                test:/\.(css|scss)$/,
                loader:['style-loader','css-loader']
            }
        ]
    },
    resolve:{
        extensions:['*','.js','.css','.scss'],
        alias:{
            js:path.resolve(__dirname,'js'),
            css:path.resolve(__dirname,'css')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'auto html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]

};