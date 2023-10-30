<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

How to Install

1) Just make a local clone of repository the update code is in main only.

2) Npm i --> to install the required packages.

3) Have a local mongoDb Database.

4) You can change port in main.ts if are using port 3000 for other purpose.

5) In app.module you can see this line ( mongodb://127.0.0.1:27017 )which is making connection to you local momgoDb and it is followed by   this,"/Book" which represnt to which database it should connect.

Note: I am using global prefix as api in main.ts , so end point will be always after this -->
http://localhost:3000/api/book-management-module/"followed by end point which you can find in book-management-module.controller" 

Example -> http://localhost:3000/api/book-management-module/addBook





ASSUMPTION:
1] No Book will have same title and author , if any book with same title and author exist it will throw error that book exist, which is case insensitive. That is if "shubham" exists then "Shubham" will throw error for a book with same title.

2] While Creating Book Record Title and Author is mandatory, while summary can be empty.
While Updating their is no such restriction.You can update any field.
 
 


ENDS POINTS:

NOTE:  HERE IN PARAMS "id " WHICH IS PASSED IS" uniqueId" WHICH IS STORED IN DB, WHEN THE RECORD IS CREATED.
  
  GET   http://localhost:3000/api/book-management-module/getBook --> Query params (id) 

        when this above api is called without id it will return all record of book.But when id is pass and it will return particular record and if no book          is present against that id then error will be throw.

 POST   http://localhost:3000/api/book-management-module/addBook --> Body()

        This APi is to create a new book record that will check that if title and author combination is unique.Then it will create record else it will              throw error with Book Already Exist.
        While Creating Book Record Author and Title are compulsory.

PATCH  http://localhost:3000/api/book-management-module/updateBookRecord --> Query params (id) & Body()

        This is to update any record , if id is not pass it will throw error saying id need to given, and if id is given and record is not present againt 
        that then No Book Found error will be thrown. We need to pass fields in body, with title , author , summary.

DELETE http://localhost:3000/api/book-management-module/deleteBook --> Query params (id)

        In this we need to pass the uniqueId as id in query to delete the record if id is not passed it will throw an error.

  
NOTE : I HAVE NOT HANDLED ARRAY OF DATA TO DO CRUD OPERATIONS.CODE CAN BE MODIFIED IF ANY SUCH REQUIREMENT COMES.

  

