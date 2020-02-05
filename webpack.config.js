const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/app.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
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
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			}
		]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'docs') // Compile into a folder called "dist"
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		})
	]
}
