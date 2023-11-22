# Underatom Design System

## Setting up Underatom
- fork Underatom with all branches
- enable actions
- update package.json
	- name
	- scope
	- version
	- repository
	- bugs
	- homepage
- update README
- update publish.yml workflow
	- scope
- push and wait for the github package to be created

## Setup Chromatic
- link chromatic to repo
- publish chromatic project
- add CHROMATIC_PROJECT_TOKEN
- every push will now trigger chromatic

## Consuming Underatom in another project
- create a personal access token
	- "read:packages" rule is enough
	- if you don't find the rule, look for "Download packages from GitHub Package Registry"
  - copy the access token
- at repo level, create a .npmrc file with the following content:
```
@<YOUR_ORGANIZATION_OR_USER>:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_ACCESS_TOKEN>
```
- add the .npmrc file to .gitignore
- `yarn add @<YOUR_ORGANIZATION_OR_USER>/underatom`

## Give Vercel access to Underatom
- at project level, create an environment variable named `NPM_RC` with the content of your .npmrc file


## Recomended git workflow

- main - base branch
- dev - development branch
- feature branches

### New feature
- create feature branch
- PR on dev
- if dev gets updated meanwhile, rebase the feature branch

### Release
- create release branch from main
- cherry-pick commits from dev on the release branch
- merge branch to main
  - the `publish` workflow will be automatically triggered 
- rebase dev on main

### Update Fork
- rebase forked main on base main (via update branch)