const fs = require('fs')
const path = require('path')

const packagePath = path.resolve('.', 'package.json')
const packageFile = fs.readFileSync(packagePath, 'utf8')
const package = JSON.parse(packageFile)

const isGithub = package.repository.url.indexOf('github.com') !== -1
const isGitlab = package.repository.url.indexOf('gitlab.com') !== -1
const isBitbucket = package.repository.url.indexOf('bitbucket.com') !== -1

if (isGithub) {
  let url = package.repository.url.replace(/^.*github.com/gi, 'http://api.github.com').replace(/\.git$/gi, '')

  console.log(url)
}
