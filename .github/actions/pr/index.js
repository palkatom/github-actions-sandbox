const core = require('@actions/core');
const github = require('@actions/github');

try {
	const g = JSON.stringify(github.context, undefined, 2);
	console.log(`github context: ${g}`);

} catch (error) {
	core.setFailed(error.message);
}
