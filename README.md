# feathers-demo

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Features
```bash
1- create user (sign up).
2- authenticate user (login).
3- upload user contacts.
4- list user contacts.
5- update , remove contact.
```


## Getting Started

### heroku:
- https://sleepy-plains-43760.herokuapp.com


### local:

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feathers-demo
    npm install
    ```

3.create databse on postgresSql
4.change connection string in default.json ("postgres") to your local database connection string

5. Start your app

    ```
    npm start
    ```
6. navigate to http://localhost:3030/




## Postman Api Documentation

7.download this file  https://drive.google.com/file/d/1kpqVa0gVaj249tx5hz-7GBQanaF3QNLs/view?usp=sharing.

8.import it to postman collection.


## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
