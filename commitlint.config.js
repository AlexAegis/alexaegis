module.exports = {
	extends: ['@commitlint/config-conventional'],
	type: ['feat', 'fix', 'test', 'docs', 'refactor', 'build', 'ci', 'perf', 'revert', 'style'],
	rules: {
		'scope-enum': [
			2,
			'always',
			['portfolio', 'package', 'docs', 'lint', 'changelog', 'release'],
		],
	},
};
