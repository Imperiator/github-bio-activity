// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Credentials } from './credentials';
import { User } from './user';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const credentials = new Credentials();
	const user = new User();
	credentials.initialize(context);

	let disposable = vscode.commands.registerCommand('github-bio-activity.testBio', async () => {
		const octokit = await credentials.getOctokit();
		const bio = await user.getBio(octokit);
		vscode.window.showInformationMessage(`Current bio: ${bio}`);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
