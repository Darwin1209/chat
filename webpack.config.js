const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const IS_DEV = process.env.NODE_ENV === 'development'

const getPlugins = () => {
	const plugins = [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: 'body',
			template: './static/index.html'
		})
	]

	if (!IS_DEV) {
		plugins.push(
			new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, './src/img'),
						to: path.resolve(__dirname, './dist/img')
					}
				]
			}),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:5].css'
			})
		)
	}

	return plugins
}

module.exports = {
	entry: path.resolve(__dirname, 'src/App.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[fullhash:5].js'
	},
	mode: IS_DEV ? 'development' : 'production',
	devtool: IS_DEV ? 'eval-cheap-module-source-map' : false,
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]',
							publicPath: '../'
						}
					}
				]
			}
		]
	},
	plugins: getPlugins()
}
