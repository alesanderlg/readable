# Readble Project

The goal of this project is to implement an app of the content of the comments.

The user should be able to post comments based on category.
The user should be able to make comments in their own post and other users.
The user should be able to vote in post and comments.
The user should be able to edit, delete post and comments.

## Prerequisite

* Node `v12.1.0` 
* NPM `6.9.0`

## Getting Started

* install all project dependencies with `npm install` 
* start the development server with `npm start` or `yarn start`

## Project Structure
This repository was bootstrapped using the `react-create-app`  command that provides us with all of the underlying webpack configurations that are done by react-create-app command. That command creates a base structure for the project that is known to be useful for most of the projects using React. The following are a quick overview of my project structure:

- `/public`: public facing files that will be exposed to the web server while using this app in development mode.
- `/src`: contains all the code related to the application’s core. 
	- `/assets`: contains images and css considered generic inside the app.
	- `/components`: contains all the generic or shared components.
    - `/containers`: contains all React component that are connected to a redux store. 
	- `/pages`: contains react components that are used as pages — or containers — for other components. 
	- `/redux`: contains actions, reducers and store 
    - `/utils`: contains all common 

## Additional dependencies

* Bootstrap CSS
* Axios 
