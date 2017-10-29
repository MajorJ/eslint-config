module.exports = {
	extends: ['./rules/rules.js'],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
};
