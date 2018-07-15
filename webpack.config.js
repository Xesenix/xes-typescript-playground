const baseWebpack = require('webpack');
const path = require('path');

/**
 * Builds configuration for loading source files with use of babel.
 */
const babelRulesFactory = () => [{
	test: /\.(t|j)sx?$/,
	exclude: /(node_modules|bower_components)/,
	use: {
		loader: 'babel-loader',
		options: {
			babelrc: true,
			compact: false,
		},
	},
}];

const webpackConfigFactory = () => {
	const webpackConfig = {
		entry: {
			main: './src/index.ts',
		},
		mode: 'production',
		output: {
			filename: '[name].boundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
		devServer: {
			contentBase: './dist',
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
			modules: ['node_modules'],
		},
		module: {
			rules: [
				...babelRulesFactory(),
			],
		},
	};

	return webpackConfig;
};

module.exports = webpackConfigFactory;
