
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/scripts');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
     entry: {
   app: [path.join(__dirname, 'app/app.js')],
   vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux-thunk',
      'axios'
   ]},
   output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
      publicPath: '/public/'
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify('production')
         }
      }),
      new webpack
      .optimize
      .UglifyJsPlugin({
         mangle: true,
         compress: {
            warnings: false, // Suppress uglification warnings
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
         },
         output: {
            comments: false
         },
         exclude: [/\.min\.js$/gi] // skip pre-minified libs
      }), //minify everything
      new webpack
      .optimize
      .DedupePlugin(), //dedupe similar code
      new webpack
      .optimize
      .AggressiveMergingPlugin(), //Merge chunks
      new webpack
      .optimize
      .CommonsChunkPlugin('vendor', 'vendor.bundle.js')
   ],

   module: {
      loaders: [
         {
            test: /\.js$/,
            loader: 'babel',
            exclude: '/node_modules/',
            include: APP_DIR,
            query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: ['antd']
            }
         }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader"
         }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!sass-loader"
         }, {
            test: /\.less?$/,
            loaders: [
               'style-loader', 'css-loader', 'less-loader?{"sourceMap":true}'
            ],
            include: __dirname
         },
         {
            test: /\.woff2?$|\.ttf$|\.eot$/,
            loader: 'file-loader',
            options: {
                name: 'public/fonts/[name].[ext]',
                publicPath: '../'
            }
          },
          {
            test: /\.png|\.jpe?g|\.gif$/,
            loader: 'file-loader',
            options: {
                name: 'public/img/[name].[ext]',
                publicPath: '../'
            }
          },
         {
            test: /\.json$/,
            loader: 'json',
         },
      ]
   },
   resolve: {
      alias: {
         app: APP_DIR
      }
   },
   node: {
       net: 'empty',
       dns: 'empty'
   }
};

module.exports = config;
