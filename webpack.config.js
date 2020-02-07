const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Extract CSS
module.exports = {
	entry: './src/app.ts',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.(ts|js)?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
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
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					'css-loader',

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
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		}),
		//new BundleAnalyzerPlugin(),
		new MiniCssExtractPlugin({filename: '[name].css',
    })	
	]
}
