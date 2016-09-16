# Angular 2 RESTful Service Example

This post is a starter version of https://github.com/DanWahlin/Angular2-RESTfulService. 

This article has been used as a starter kit for this [article](http://welllin.net/introduction-to-angular2-with-rest-api-using-vscode/) in my [blog](http://welllin.net/) 

## Running the Application with Docker

1. Install Docker for Mac/Windows or Docker Toolbox - https://www.docker.com/products/overview

1. Open a command prompt window

1. Run `npm install`

1. Run `npm run tsc:w` to compile TypeScript to JavaScript locally (leave the window running). This is only needed when in "dev" mode.

1. Open another command window and navigate to this application's root folder in the command window

1. Run `docker-compose build` to build the images

1. Run `docker-compose up` to run the containers

1. Navigate to http://localhost:3000 if using Docker for Mac/Windows or http://192.168.99.100:3000 if using Docker Toolbox in a browser
