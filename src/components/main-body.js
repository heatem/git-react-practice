import React from 'react';

const Practicemainbody = () => {
    return (
        <div>
            <ul>
                <li>git init // creates a repo locally</li>
                <li>git add . // adds all of your changes to the git repo</li>
                <li>git add FileName.txt // adds the file specified to your git repo instead of using “git add .” to add all of them.</li>
                <li>git commit -m “short comment about changes here” // commits your changes to the repository</li>
                <li>git status // red files mean they haven’t been added to your changes to be committed, green means they’re added but not committed, if everything has been committed, it will say something like “nothing to commit” in white</li>
                <li>git push // pushes the changes from your current branch to the matching branch in your remote repo (like GitHub). If there’s not a matching branch, terminal will give you a line to copy/paste to create it</li>
            </ul>
                <h4>In git, your master branch is your main branch. It should be a working copy of your code. You should create a new branch when you want to make changes. Call the branch something that indicates what you’re working on. (Name it using _ or -, not camelCase)</h4>
            <ul>
                <li>git checkout -b new-branch-name // this creates the branch and switches you to it</li>
                <li>git branch // will show you which branch you’re on</li>
                <li>git checkout branch-name // ex. git checkout master will switch you to a different branch, (master, in this example)</li>
                <li>git merge branch-name // merges branch_name into the branch you’re on</li>
                <li>git branch -d branch-name // deletes the branch</li>
            </ul>
                <h4>When you create a repository in GitHub, it will give you code to paste in Terminal so you can set your remote. change directory (cd) to the directory on your computer (ex. cd Documents/ProjectFolder)</h4>
            <ul>
                <li>git remote add origin https://github.com/your-github-project-here // get this line from GitHub</li>
                <li>git push -u origin master // pushes your master to GitHub. You should be able to refresh GitHub and see your files</li>
            </ul>
                <h4>When you want to get your repo from GitHub</h4>
            <ul>   
                <li>git fetch // gets the change data from the remote branch but doesn’t change your files</li>
                <li>git pull // merges remote changes into your local files</li>
            </ul>
        </div>
    )
}

export {Practicemainbody};