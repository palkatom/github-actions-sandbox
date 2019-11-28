const core = require('@actions/core');
const github = require('@actions/github');

try {
	const g = JSON.stringify(github.context, undefined, 2);
	console.log(`github context: ${g}`);
        const go = JSON.stringify(github, undefined, 2);
        console.log(`github object: ${go}`);
} catch (error) {
	core.setFailed(error.message);
}
