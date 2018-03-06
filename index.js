module.exports = {

	extends: "eslint:recommended",

	rules: {
		"array-callback-return": ["error"],
		"block-scoped-var": ["error"],
		"camelcase": ["error"],
		"eqeqeq": ["error", "always"],
		"indent": ["off", "tab"],
		"linebreak-style": ["error", "unix"],
		"no-array-constructor": ["error"],
		"no-duplicate-imports": ["error"],
		"no-else-return": ["error"],
		"no-eval": ["error"],
		"no-loop-func": ["error"],
		"no-mixed-operators": ["error"],
		"no-multi-assign": ["error"],
		"no-nested-ternary": ["error"],
		"no-new-object": ["error"],
		"no-new-wrappers": ["error"],
		"no-param-reassign": ["off"],
		"no-sync": ["error"],
		"no-template-curly-in-string": ["error"],
		"no-throw-literal": ["error"],
		"no-unneeded-ternary": ["error"],
		"no-useless-concat": ["error"],
		"no-useless-escape": ["error"],
		"no-useless-return": ["error"],
		"no-var": ["error"],
		"object-shorthand": ["error", "always"],
		"one-var": ["error", "never"],
		"prefer-const": ["error"],
		"prefer-rest-params": ["error"],
		"prefer-template": ["error"],
		"quotes": ["off", "single"],
		"semi": ["error", "always"],
		"spaced-comment": ["error"],
		"template-curly-spacing": ["error"],
		"yoda": ["error"],
		"no-shadow": ["error",
			{
				"allow": ["err"]
			}
		],
		"id-length": ["error",
			{
				"min": 2,
				"exceptions": ["_", "i"],
				"properties": "never"
			}
		],
		"no-restricted-properties": ["error",
			{
				"object": "Object",
				"property": "assign",
				"message": "Use the spread operator"
			},
			{
				"object": "_",
				"property": "merge",
				"message": "Use the spread operator"
			},
			{
				"object": "_",
				"property": "assign",
				"message": "Use the spread operator"
			}
		],
		"no-restricted-syntax": ["error",
			{
				"selector": "ForOfStatement",
				"message": "Use forEach to iterate arrays"
			},
			{
				"selector": "ForInStatement",
				"message": "Use _.forEach to iterate objects"
			}
		]
	}

};