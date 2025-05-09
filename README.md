# This is a project to test the DevOps Tools

# Method 1: Run the application using docker

## Install Docker 
## build docker image from Docker file
docker build -t feedback-form .

### create docker container from docker image
docker run -d -p 3000:3000

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Method 2: Run the application without docker

## install node and npm
## initialize node
npm init

## install dependencies
npm install

## run the server
npm start server.js
