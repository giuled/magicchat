const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			}
		]
	},
	mode: 'development',
	entry: path.resolve(__dirname, 'src'),
	output: {
		filename: 'bundle.js',
		chunkFilename: 'bundle.[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	}
};
