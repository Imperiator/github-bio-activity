import { Octokit } from "@octokit/rest";
import * as vscode from "vscode";

export class User {
    async getBio(octokit: Octokit): Promise<string> {
        const user:any = await octokit.users.getAuthenticated();
        return user.data.bio;
    }  
}
