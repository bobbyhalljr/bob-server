# Building a Node.js server

## Create a Git Repository and add Dependencies

### Setting up the server
#### create a directory

- ``mkdir < server-directory-name >`` // creates directory
- ``git init`` // creates a git repo
- ``npx gitignore node`` // creates git.ignore for node.js
-``npm init -y`` // creates a package.json

## Add Dependencies 

- ``npm i express helmet cors``
- ``npm i nodemon -D`` // Add nodemon as a dev-dependency

- Add scripts to package.json

`
    
    "scripts": {   
        "server": "nodemon index.js",
        "start": "node index.js" // Optional for deployment
    }
`


