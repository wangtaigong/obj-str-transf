const path = require('path')
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'main.js'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	}
}