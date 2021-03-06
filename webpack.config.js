const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Extract CSS
var config = {
	entry: './src/app.ts',
	resolve:  {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			// compile ts int js
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.(ts|js)?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			//load html
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			// compile sass
			{
				test: /\.s[ac]ss$/,
				exclude: [/node_modules/],
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',


				]
			},
			//compile css (vendor)
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',

				]
			},{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
						  outputPath: 'img/',
						  esModule: false,
						}
					  }
				],
		    },
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  name: '[name].[ext]',
					  outputPath: 'fonts/'
					}
				  }
				]
			}
		]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'docs') // Compile into a folder called "dist"
	},
	externals: {
        "babylonjs": "BABYLON",
	},
	plugins: []
	
}	

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.plugins = [
  
		  new HtmlWebPackPlugin({
			  template: './src/index.html',
			  filename: 'index.html'
		  }),
		  //new BundleAnalyzerPlugin(),
		  new MiniCssExtractPlugin({filename: '[name].css',
	  })	
	  ]
	  }
	  //...ss
  
	if (argv.mode === 'production') {
		config.plugins = [

			new HtmlWebPackPlugin({
				template: './src/index.html',
				filename: 'index.html'
			}),
			new FaviconsWebpackPlugin('./src/logo.png'),
			//new BundleAnalyzerPlugin(),
			new MiniCssExtractPlugin({filename: '[name].css',
		})	
		]
	}
  
	return config;
  };

