# JavaScript Algorithms and Data Structures Course by FreeCodeCamp

Basics of JavaScript and some links to related technologies

## Content

### Module 1: Basic JavaScript

- [PyramidGenerator](./PyramidGenerator/): Create a pyramid using basic JS. Contains looping, conditional statements, variables, etc.
- [GradebookApp](./GradebookApp/): String literals (formatted strings), and other JS basics
- [RolePlayingGame](./RolePlayingGame/): Integrating JavaScript with HTML and CSS using DOM, operators and basics
- [RandomBackgroundColorChanger](./RandomBackgroundColorChanger/): Errors in JS
- [CalorieCounter](./CalorieCounter/): Event listeners and element methods in JS
- [RPSGame](./RPSGame/): Revision of event listeners and JS methods by building a rock-paper-scissors game
- [MusicPlayer](./MusicPlayer/): Audio element, DOM manipulation, arrays, arrow (lambda) functions in JS
- [DateFormatter](./DateFormatter/): Date in JavaScript

**Project**: [PalindromeChecker](./Projects/PalindromeChecker/) - A palindrome checker app

### Module 2

- [FootballTeamCards](./FootballTeamCards/): Switch, map, filter, and destructuring assignment in JS
- [TodoApp](./TodoApp/): Local storage in JS
- [BinaryConverter](./BinaryConverter/): Timeouts and recursion

**Project**: [RomanNumeralConverter](./Projects/RomanNumeralConverter/) - Convert input number to roman numerals

### Module 3

- [SpamFilter](./SpamFilter/): Regular expressions in JS

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- W3Schools: https://www.w3schools.com/js/ and https://www.w3schools.com/JSREF/
- NodeJS: https://nodejs.org/en
    - https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
    - https://github.com/nodejs/examples
- TypeScript (JS with types): https://www.typescriptlang.org/
- Parody (ridiculous JavaScript things): https://wtfjs.com/

## Getting Started

### Install NodeJS on Local Machine

https://nodejs.org/en/download/package-manager

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh > install_node.sh
chmod u+x ./install_node.sh
bash ./install_node.sh  # or chmod and run it
# Install latest node
nvm install 20
nvm which 20
# Set this as the default `node` in all new shells
nvm alias default stable    # Set to 'none' to remove
```

Running the above script gives

```txt
=> Downloading nvm from git to '/home/avneesh/.nvm'
=> Cloning into '/home/avneesh/.nvm'...
remote: Enumerating objects: 369, done.
remote: Counting objects: 100% (369/369), done.
remote: Compressing objects: 100% (315/315), done.
remote: Total 369 (delta 43), reused 175 (delta 27), pack-reused 0
Receiving objects: 100% (369/369), 368.09 KiB | 560.00 KiB/s, done.
Resolving deltas: 100% (43/43), done.
* (HEAD detached at FETCH_HEAD)
  master
=> Compressing and cleaning up git repository

=> Appending nvm source string to /home/avneesh/.zshrc
=> Appending bash_completion source string to /home/avneesh/.zshrc
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:

/home/avneesh/.npm-global/lib
+-- mermaid.cli@0.5.1
`-- tldr@3.3.8
=> If you wish to uninstall them at a later point (or re-install them under your
=> `nvm` Nodes), you can remove them from the system Node as follows:

     $ nvm use system
     $ npm uninstall -g a_module

=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
