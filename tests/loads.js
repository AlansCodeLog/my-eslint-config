/**
 * Checks that our config loads and has no errors or deprecated rules.
 */

const { ESLint } = require("eslint")


const eslint = new ESLint()
eslint.lintFiles("tests/fixtures/**/*")
	.then(async results => {
		const formatter = await eslint.loadFormatter()
		const pretty_res = formatter.format(results)
		console.log(pretty_res)

		const has_problems = results.find(res => res.errorCount > 0 || res.usedDeprecatedRules.length > 0) !== undefined
		const has_deprecated_rules = results.find(res => res.usedDeprecatedRules.length > 0) !== undefined

		if (has_deprecated_rules) {
			console.log("The following rules are deprecated:\n")

			for (const res of results) {
				// these won't be printed by the eslint formatter normally
				if (res.usedDeprecatedRules.length > 0) {
					for (const rule of res.usedDeprecatedRules) {
						console.error(`${rule.ruleId}\n\tReplaced by: [${rule.replacedBy.join(", ")}]`)
					}
				}
			}
			// give the errors some space
			console.log("")
		}
		if (has_problems) process.exit(1)
	})