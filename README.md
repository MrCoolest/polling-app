# Polling system API

This is a backend api for creating questions and adding options to a specific question. Options can be voted. Questions, options can be deleted and questions can be viewed with all of their options.


## Polling system Features

- Create questions
- Add options to question
- Delete a question
- Delete an option
- Add vote to an option
- View a question with all of its options

## Installation Guide

- Clone this repository.
- Run npm install to install all the dependencies.

## Usage

- Run npm start to start the application.
- Connect to the API using Postman on port 8000.

## API Endpoints

| HTTP Verbs | Endpoints                          | Action                                 |
| ---------- | -----------------------------------| -------------------------------------- |
| POST       | /questions/create                  | To create a  question                  |
| POST       | /questions/:id/options/create      | To add options to a specific question  |
| DELETE     | /questions/:id/delete              | To delete a question                   |
| DELETE     | /options/:id/delete                | To delete an option                    |
| PUT        | /options/:id/add_vote              | To increase the count of votes         |
| GET        | /questions/:id                     | To view a question and its options     |

## Tech stack
* NodeJS
* ExpressJS
* MongoDB
* Mongoose ODM

## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

    Polling_system_api
        |   .gitignore
        |   app.js
        |   package-lock.json
        |   package.json
        |   README.md
        |
        +---assets
        +---config
        |       db.js
        |
        +---controllers
        |       home_controller.js
        |       options_controller.js
        |       questions_controller.js
        |
        +---models
        |       option.js
        |       question.js
        |
        \---routes
                index.js
                options.js
                questions.js

Happy Coding :)