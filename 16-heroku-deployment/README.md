# Heroku Deployment

## What is Deployment
Software deployment is all of the activities that make a software system available for use.

## What is Cloud
"The cloud" refers to servers that are accessed over the Internet, and the software and databases that run on those servers. Cloud servers are located in data centers all over the world. By using cloud computing, users and companies do not have to manage physical servers themselves or run software applications on their own machines.

## What is Heroku
Heroku is a cloud platform as a service (PaaS) supporting several programming languages.

* Heroku supports the following apps: 
  * Ruby
  * Node JS
  * Java
  * Python
  * Clojure
  * Scala
  * Go
  * PHP

## Setup
1. create an account on [heroku](https://signup.heroku.com/)
2. download and install heroku client on your machine [download](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
3. use the `heroku login` command to login in to the Heroku CLI

## Notes
1. heroku can't serve static files by itself, you should run server on heroku to serve static files
2. ensure that your distribution dir is deployable (dir should not exist in .gitignore)

## Backend Deployment: Express.js
1. create new repo in github and clone it to your machine
2. in your new repo, `heroku create`
3. create [Procfile](https://devcenter.heroku.com/articles/procfile) (in Procfile: `web: node app.js`)
4. Commit project to git repo (in terminal: `git add . && git commit -m "deployment" && git push`)
5. deploy to heroku ( in terminal: `git push heroku main`) (or: `git push heroku HEAD:master`)
6. scale the [Dynos](https://www.heroku.com/dynos) (in terminal: `heroku ps:scale web=1`)

## Frontend Deployment: HTML/VanillaJS
1. use [Webpack5 boilerplate template](https://github.com/taniarascia/webpack-boilerplate) to start your app development
2. install dependencies (`npm install`)
4. build your project (`npm run build`) [Uncaught ReferenceError: regeneratorRuntime is not defined](https://stackoverflow.com/questions/65487071/uncaught-referenceerror-regeneratorruntime-is-not-defined-in-react-17-webpack)
5. copy dist dir into your backend project
6. serve main path `'/'` as static file `/dist/index.html`
7. serve static files directory `dist`
8. commit & redeploy backend project to heroku

## Assignment
1. deploy frontend + backend by yourself according to steps in `Backend Deployment: Express.js` and `Frontend Deployment: HTML/VanillaJS`
2. deploy your previous pokedex-api & pokedex-app to heroku

## Resources
[Heroku Documentation](https://devcenter.heroku.com/categories/reference)
[An Introduction to Heroku](https://medium.com/@GoRadialspark/an-introduction-to-heroku-c11c6fcbffa)
