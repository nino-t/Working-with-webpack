const path = require('path')

module.exports = {
	mode: 'development',
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env", "stage-0", "react"]
					}
				}
			}
		]
	}
}