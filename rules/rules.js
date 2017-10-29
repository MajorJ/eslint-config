module.exports = {
	extends: 'airbnb',
	rules: {

		// ** IMPORTS **

		// prohibit namespaced imports - prefer selective imports, to allow for webpack tree shaking
		'import/no-namespace': 'error',

		// Enforce a convention in module import order
		'import/order': ['error', {
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'newlines-between': 'ignore',
		}],


		// ** POSSIBLE ERRORS **

		// allow calling Object.prototype methods directly on object instances
		'no-prototype-builtins': 'off',


		// ** BEST PRACTICES **

		// allow else after return - although unnecessary, it often improves readability
		'no-else-return': 'off',

		// only pass Error instances to the reject function of promises
		'prefer-promise-reject-errors': 'error',

		// Disallow providing the 10 radix when calling parseInt.
		// Not needed in ES5-compliant environments.
		radix: ['error', 'as-needed'],


		// ** STYLISTIC ISSUES **

		// use tabs for indentation - otherwise as per AirBnB style guide
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			// MemberExpression: null,
			// CallExpression: {
			// parameters: null,
			// },
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
			CallExpression: {
				arguments: 1,
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoredNodes: ['JSXElement', 'JSXElement *'],
		}],

		// require empty line before return statement, for readability
		'newline-before-return': 'error',

		// allow tabs, since that's what we're using for indentation
		'no-tabs': 'off',


		// ** ES6 **

		// require parens around arrow function arguments
		'arrow-parens': ['error', 'always'],


		// ** REACT **

		// enforce .js extensions for files containing jsx
		'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

		// enforce JSX indentation using tabs, not spaces
		'react/jsx-indent': ['error', 'tab'],

		// enforce props indentation, using tabs
		'react/jsx-indent-props': ['error', 'tab'],

		// require JSX in an array or iterator to have a key prop
		'react/jsx-key': 'error',

		// don't enfoce use of stateless functional components
		'react/prefer-stateless-function': 'off',

		// require propTypes to be sorted alphabetically, for readability
		'react/sort-prop-types': ['error', {
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false,
		}],
	},
};
