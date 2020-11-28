/**
* ⭐ means the regular version of the rule needs to be disabled, but any changes to it should be "synced" with the js version.
*/
module.exports = {
	extends: [
		"./js",
	],
	overrides: [
		{
			files: ["**/*.ts"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
			},
			plugins: [
				"@typescript-eslint",
			],
			settings: {
				"import/parsers": {
					"@typescript-eslint/parser": [".ts", ".tsx"],
				},
				"import/resolver": {
					typescript: {
						alwaysTryTypes: true,
					},
				},
			},
			rules: {
				// #region IMPORTS
				"@typescript-eslint/no-duplicate-imports": ["warn", { includeExports: false }], // ⭐
				// #regionend

				// #region STYLE - TYPESCRIPT SPECIFIC
				"@typescript-eslint/explicit-member-accessibility": ["warn", {
					accessibility: "no-public",
					overrides: {
						parameterProperties: "off",
					},
				}],
				"@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
				"@typescript-eslint/member-delimiter-style": ["warn", {
					multiline: {
						delimiter: "none",
						requireLast: true,
					},
					singleline: {
						delimiter: "comma",
						requireLast: false,
					},
				}],
				"@typescript-eslint/typedef": ["warn", {
					arrowParameter: false,
					arrayDestructuring: false,
					objectDestructuring: false,
					variableDeclaration: false,
					variableDeclarationIgnoreFunction: false,
					memberVariableDeclaration: true,
					parameter: true,
					propertyDeclaration: true,
				}],
				"@typescript-eslint/array-type": "warn",
				"@typescript-eslint/consistent-type-assertions": "warn",
				"@typescript-eslint/consistent-type-definitions": ["warn", "type"],
				"@typescript-eslint/no-parameter-properties": "warn",
				"@typescript-eslint/prefer-function-type": "warn",
				"@typescript-eslint/prefer-enum-initializers": "warn",
				"@typescript-eslint/prefer-literal-enum-member": "off",
				"@typescript-eslint/no-unnecessary-type-constraint": "warn",
				// #regionend

				// #region STYLE - CLASS RELATED
				"@typescript-eslint/lines-between-class-members": ["warn", { exceptAfterOverload: false }],

				"@typescript-eslint/no-dupe-class-members": "warn", // ⭐
				// #regionend

				// #region STYLE - NAMING
				"@typescript-eslint/naming-convention": ["warn",
				// { filter: "exception|exception2" }
				{ selector: "default", format: ["snake_case"], leadingUnderscore: "allow", trailingUnderscore: "allow" },
				{ selector: "variable", format: ["snake_case", "UPPER_CASE"], leadingUnderscore: "allow", trailingUnderscore: "allow" },
				{ selector: "memberLike", modifiers: ["private"], format: ["snake_case"], leadingUnderscore: "allow", trailingUnderscore: "allow" },

				// future awaiting https://github.com/typescript-eslint/typescript-eslint/issues/1712
				// todo soon !
				// { selector: "memberLike", modifiers: [ "private" ], format: [ "snake_case" ], leadingUnderscore: "allow", trailingUnderscore: "allow", allowDouble: true },
				// allows double underscore private functions to bypass naming conventions temporarily
				// format: [] = allows anything
				{ filter: "__", selector: "memberLike", format: [], modifiers: ["private"]},

				{ selector: "memberLike", modifiers: ["public"], format: ["camelCase"]},
				{ selector: "typeLike", format: ["PascalCase"], leadingUnderscore: "allow", trailingUnderscore: "allow" },
				{ selector: "property", format: null, leadingUnderscore: "allow", trailingUnderscore: "allow" },
				{ selector: "enum", format: ["UPPER_CASE"], leadingUnderscore: "allow", trailingUnderscore: "allow" },
				{ selector: "enumMember", format: ["UPPER_CASE", "PascalCase", "snake_case"], leadingUnderscore: "allow", trailingUnderscore: "allow" },
				{ selector: "typeParameter", format: ["PascalCase"], prefix: ["T"]}],
				// #regionend

				// #region STYLE - WHITESPACE
				"@typescript-eslint/indent": ["warn", "tab", {
					SwitchCase: 1,
					ArrayExpression: "first",
					ObjectExpression: "first",
					// i"ve come to realize these are much more readable
					flatTernaryExpressions: true,
					ignoredNodes: [
						// fixes bug in typescript-eslint
						"TSTypeParameterInstantiation",
						// allows us to indent generics nicely
						"TSTypeParameter",
						// flat ternaries does not really do what i want
						"ConditionalExpression",
						// messes with nested templates
						"TemplateLiteral > *",
						// allows first line of if to be indented
						"BinaryExpression",
					],
				}],
				"@typescript-eslint/type-annotation-spacing": "warn",

				"@typescript-eslint/brace-style": ["warn", "1tbs", { allowSingleLine: true }], // ⭐
				"@typescript-eslint/comma-dangle": ["warn", "always-multiline"], // ⭐
				"@typescript-eslint/comma-spacing": ["warn", { before: false, after: true }], // ⭐
				"@typescript-eslint/func-call-spacing": "warn", // ⭐
				"@typescript-eslint/keyword-spacing": ["warn", { before: true, after: true }], // ⭐
				"@typescript-eslint/space-before-function-paren": ["warn", { anonymous: "never", asyncArrow: "always", named: "never" }], // ⭐
				"@typescript-eslint/space-infix-ops": "warn", // ⭐
				// #regionend

				// #region STYLE - DELIMITERS / OPERATORS
				"@typescript-eslint/no-extra-semi": "warn", // ⭐
				"@typescript-eslint/quotes": ["warn", "double", { avoidEscape: false, allowTemplateLiterals: true }],
				"@typescript-eslint/semi": ["warn", "never"], // ⭐
				// #regionend

				// #region STYLE - FUNCTIONS
				"@typescript-eslint/no-array-constructor": "warn",
				// #endregion

				// #region STYLE - OBJECTS / ARRAYS
				"@typescript-eslint/dot-notation": "warn",
				// #regionend

				// #region PREFERENCE - GENERAL
				"@typescript-eslint/no-empty-function": "warn",
				"@typescript-eslint/no-throw-literal": "warn", // ⭐
				"@typescript-eslint/no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }], // ⭐
				"@typescript-eslint/no-var-requires": "warn",
				"@typescript-eslint/prefer-for-of": "warn",
				"@typescript-eslint/prefer-readonly": "warn",
				// #regionend

				// #region PREFERENCE - TYPESCRIPT SPECIFIC
				"@typescript-eslint/adjacent-overload-signatures": "warn",
				"@typescript-eslint/no-namespace": "warn",
				"@typescript-eslint/no-unnecessary-type-assertion": "warn",
				"@typescript-eslint/prefer-namespace-keyword": "warn",
				"@typescript-eslint/triple-slash-reference": "warn",
				"@typescript-eslint/unified-signatures": "warn",
				"@typescript-eslint/ban-ts-comment": ["warn", { "ts-expect-error": "allow-with-description" }],
				"@typescript-eslint/ban-tslint-comment": ["error"],
				// #regionend

				// #region UNSAFE / ERROR PRONE
				"@typescript-eslint/await-thenable": "warn",
				"@typescript-eslint/class-literal-property-style": "warn",
				// todo check working okay
				"@typescript-eslint/no-confusing-void-expression": ["warn", { ignoreArrowShorthand: false }],
				"@typescript-eslint/default-param-last": "warn",
				"@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true }],
				"@typescript-eslint/no-base-to-string": "warn",
				"@typescript-eslint/no-empty-interface": ["warn", { allowSingleExtends: true }],
				"@typescript-eslint/no-extra-non-null-assertion": "warn",
				"@typescript-eslint/no-floating-promises": ["warn", { ignoreIIFE: true }],
				"@typescript-eslint/no-for-in-array": "warn",
				"@typescript-eslint/no-inferrable-types": ["warn", { ignoreParameters: true, ignoreProperties: true }],
				"@typescript-eslint/no-misused-new": "warn",
				"@typescript-eslint/no-misused-promises": "warn",
				"@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
				"@typescript-eslint/no-require-imports": "warn",
				"@typescript-eslint/no-this-alias": ["warn", { allowDestructuring: true, allowedNames: ["self", "context"]}],
				"@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
				"@typescript-eslint/no-unnecessary-qualifier": "warn",
				"@typescript-eslint/no-use-before-define": ["warn", { functions: false, classes: true, enums: false, variables: true, typedefs: false }], // ⭐ // only classes are not hoisted, eslint will still complain about the false ones if we're using the item in the same scope
				"@typescript-eslint/prefer-as-const": "warn",
				"@typescript-eslint/prefer-includes": "warn",
				"@typescript-eslint/prefer-nullish-coalescing": ["warn", { ignoreConditionalTests: true, ignoreMixedLogicalExpressions: true }],
				"@typescript-eslint/no-confusing-non-null-assertion": "off",
				"@typescript-eslint/no-implicit-any-catch": ["warn", { allowExplicitAny: true }],
				"@typescript-eslint/no-implied-eval": "warn", // ⭐
				"@typescript-eslint/no-invalid-this": "warn", // ⭐
				"@typescript-eslint/no-loop-func": "warn", // ⭐
				"@typescript-eslint/no-loss-of-precision": "warn", // ⭐
				"@typescript-eslint/no-redeclare": ["warn", { ignoreDeclarationMerge: true }], // ⭐
				"@typescript-eslint/no-shadow": ["warn", { ignoreTypeValueShadow: true, ignoreFunctionTypeParameterNameValueShadow: true }], // ⭐
				"@typescript-eslint/no-unused-expressions": ["warn", { allowTernary: true }], // ⭐
				"@typescript-eslint/prefer-optional-chain": "warn",
				"@typescript-eslint/prefer-reduce-type-parameter": "warn",
				"@typescript-eslint/prefer-string-starts-ends-with": "warn",
				"@typescript-eslint/prefer-ts-expect-error": "warn",
				"@typescript-eslint/promise-function-async": "warn",
				"@typescript-eslint/require-await": "warn", // ⭐
				"@typescript-eslint/restrict-plus-operands": ["warn", { checkCompoundAssignments: true }],
				"@typescript-eslint/restrict-template-expressions": ["warn", { allowNumber: true, allowBoolean: true, allowAny: true }],
				"@typescript-eslint/return-await": "warn",
				"@typescript-eslint/strict-boolean-expressions": ["warn"],
				"@typescript-eslint/switch-exhaustiveness-check": "warn",
				// #regionend

				// #region INTERFERE WITH TYPESCRIPT
				"brace-style": "off",
				"comma-dangle": "off",
				"comma-spacing": "off",
				"dot-notation": "off",
				"func-call-spacing": "off",
				"keyword-spacing": "off",
				"no-duplicate-imports": "off",
				"no-dupe-class-members": "off",
				"no-extra-semi": "off",
				"no-implied-eval": "off",
				"no-invalid-this": "off",
				"no-loop-func": "off",
				"no-loss-of-precision": "off",
				"no-redeclare": "off",
				"no-return-await": "off",
				"no-shadow": "off",
				"no-throw-literal": "off",
				"no-unused-expressions": "off",
				"no-unused-vars": "off",
				"no-use-before-define": "off",
				quotes: "off",
				"require-await": "off",
				semi: "off",
				"space-before-function-paren": "off",
				// #regionend

				// #region UNUSED
				// kept for reference and also `show-unset` script
				"@typescript-eslint/ban-ts-ignore": "off",
				"@typescript-eslint/ban-types": "off",
				"@typescript-eslint/camelcase": "off",
				"@typescript-eslint/class-name-casing": "off",
				"@typescript-eslint/consistent-type-imports": "off", // not needed
				"@typescript-eslint/explicit-module-boundary-types": "off", // not needed, explicit-function-return-type is on
				"@typescript-eslint/init-declarations": "off",
				"@typescript-eslint/interface-name-prefix": "off",
				"@typescript-eslint/member-ordering": "off",
				"@typescript-eslint/method-signature-style": "off",
				"@typescript-eslint/no-dynamic-delete": "off",
				"@typescript-eslint/no-explicit-any": "off",
				"@typescript-eslint/no-extra-parens": "off",
				"@typescript-eslint/no-extraneous-class": "off",
				"@typescript-eslint/no-invalid-void-type": "off",
				"@typescript-eslint/no-magic-numbers": "off",
				"@typescript-eslint/no-non-null-assertion": "off",
				"@typescript-eslint/no-type-alias": "off",
				"@typescript-eslint/unbound-method": ["off", { ignoreStatic: true }], // giving weird errors
				"@typescript-eslint/no-unnecessary-condition": "off",
				"@typescript-eslint/no-unnecessary-type-arguments": "off",
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-unsafe-return": "off",
				"@typescript-eslint/no-useless-constructor": "off",
				"@typescript-eslint/prefer-readonly-parameter-types": "off", // getting weird false positives
				"@typescript-eslint/prefer-regexp-exec": "off",
				"@typescript-eslint/require-array-sort-compare": "off",
				// #endregion
			},
		},
	],
}
