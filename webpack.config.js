const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const RESOURCES = path.join(__dirname, 'src/main/resources/static');
const APP = path.join(RESOURCES, 'angular/');
const BIG_DAY = path.join(RESOURCES, 'bigday');
module.exports = {
    resolve: {
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout'
        }
    },
    entry: {
        polyfill : [
            path.join(__dirname, 'node_modules/core-js/client/shim.min.js'),
            path.join(__dirname, 'node_modules/zone.js/dist/zone.js'),
            path.join(__dirname, 'node_modules/rxjs/bundles/Rx.js')
        ],
        bigday : [
            //path.join(BIG_DAY, 'js/vendor/jquery-3.1.1.min.js'),
            path.join(BIG_DAY, 'js/vendor/bootstrap.min.js'),
            path.join(BIG_DAY, 'js/vendor/jquery.waypoints.min.js'),
            //path.join(BIG_DAY, 'js/vendor/imagesloaded.pkgd.min.js'),
            //path.join(BIG_DAY, 'js/vendor/isotope.pkgd.min.js'),
            path.join(BIG_DAY, 'js/vendor/owl.carousel.2.1.6/owl.carousel.min.js'),
            path.join(BIG_DAY, 'js/vendor/countdown.js'),
            path.join(BIG_DAY, 'js/vendor/jquery.magnific-popup.min.js'),
            path.join(BIG_DAY, 'js/parallax.js'),
            path.join(BIG_DAY, 'js/main.js')
        ],
        app : path.join(APP, 'app.main.js'),
    },
    output: {
        path: path.join(RESOURCES, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin([path.join(RESOURCES, 'dist/*')], {
            verbose: true,
            dry: false
        }),
        new CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity,
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            Reflect: 'core-js/es7/reflect'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};