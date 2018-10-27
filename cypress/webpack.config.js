'use strict';
const path = require('path');
const pick = require('lodash/pick');
const mergeWith = require('lodash/mergeWith');
const reactScriptWebpackConfig = require('react-scripts/config/webpack.config.dev');

const BASE_PATH = path.resolve(__dirname, '..');

const craConfig = pick(reactScriptWebpackConfig, [
	'resolve',
	'module'
]);

const webpackConfig = {
	resolve: {
		extensions: [
			'.mjs',
			'.js',
			'.jsx',
			'.json'
		],
		modules: [
			path.resolve(BASE_PATH, 'node_modules'),
			path.resolve(BASE_PATH, 'src')
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: false,
							cacheDirectory: true,
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							]
						}
					}
				]
			}
		]
	}
};

module.exports = mergeWith(craConfig, webpackConfig, (objValue, srcValue) => {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
});
