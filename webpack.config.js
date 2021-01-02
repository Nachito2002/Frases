const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'build')
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
				resolve: {
					extensions: ['.js', '.jsx']
				}
			},
			{
				test: /\.s[ac]ss/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
}
