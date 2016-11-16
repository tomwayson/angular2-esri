var webpack = require("webpack");

module.exports = {
    entry: {
        main: [
            './app/boot.ts' // entry point for your application code
        ],
        vendor: [
            // put your third party libs here
            "core-js",
            "reflect-metadata", // order is important here
            "rxjs",
            "zone.js",
            '@angular/core',
            '@angular/common',
            "@angular/compiler",
            "@angular/core",
            "@angular/http",
            "@angular/platform-browser",
            "@angular/platform-browser-dynamic",
            "@angular/router"
        ]
    },
    output: {
        filename: './dist/[name].bundle.js',
        publicPath: './',
        libraryTarget: "amd"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: ''
            },
            // css
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: Infinity
        // })
    ],
    externals: [
        function (context, request, callback) {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request) ||
                /^moment/.test(request) 
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }
    ],
    devtool: 'source-map'
};