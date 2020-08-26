# Personal Website of Jay Swanson

This is the personal website of Jay Swanson. [Deployed here!](https://swanjson.github.io/).

Originally forked from Joel Detweiler. [See his website here](https://jdd1260.github.io/).

Started using Gatsby Starter - CeeVee | Design by Styleshout | Developed in React ⚛️ by Aman Mittal.

Additional development done by Joel Detweiler.
Additional development done by Jay Swanson.


### Features:

* Based on the Ceevee site template, design by [Styleshout](https://www.styleshout.com/)
* Uses [Gatsby](https://www.gatsbyjs.org/) for building a static website using React.
* All personal information is isolated, so this site can be easily forked and modified for someone to reuse.
* Single Page Resume/Portfolio site
* Responsive Design, optimized for Mobile devices


### Develop

Run `yarn start` in the terminal to start a local server with hot-reloading of code changes.

Make changes you want by modifying the text files for each React component, found in `src/components/*/text.js`. No personal information is stored outside of these files. Make changes to images by adding/removing them in `src/assets/images`.

### Deploy

Deployment to github-pages is built in using `gh-pages`. Run `yarn deploy` to deploy to this repository's master branch. This project is also configured to deploy automatically using Travis-CI. No code changes will be needed for you to reuse this process, but you will need to follow the Travis [configuration guide](https://docs.travis-ci.com/user/deployment/pages/).

---

#### License

MIT




### TODO

- Change keys for job mapping
	- find way to use the 'random unique 

- Menu button on mobile tap off
- Make images squares and auto adjusting?

- Resume back button
- Resume header for current positions (detect xxx-present)
- Printable Resume???
	- make buttons that are linked to another github repo with updated resumes Indoor and Outdoor
- figure out master vs deployTest. what the travis build does to the repo
- update skills and languages
- Minify & other stuff?
- New line in text `doesn&#39;t`??

- mobile version
	- (make social icons larger)
	- tap off the drop down button
	- Add image to about me
- view resume button moved

### some running tips (sometimes have to update travis.yml and switch around node versions)

To run in local browser:
need to install node
```bash
brew install node
```
need to npm install the gatsby cli
```zsh
npm install -g gatsby-cli #globally installs, need to use sudo on my work comp
```
use nvm to change node versions
```zsh
nvm use 10 #changes the node version
```

need to npm install the gatsby cli
```zsh
yarn install
yarn start
 #globally installs, need to use sudo on my work comp
```


