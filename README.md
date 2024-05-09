# ℹ️ QA-technical-test ☑️

This is a repository to share my QA-technical-test. It contains:
- Exercise 1: Find a bug (see issues)
- Exercise 2: Web automation
- Exercise 3: API testing

## Índex 
- [Exercise 1](#exercise-1) 
- [Exercise 2](#exercise-2) 

## Exercise 1
### Description 📖
Find a bug in a website and report it
You can find this exercise on **issues** section

## Exercise 2
### Description 📖
Do an automation of a google search about term "Automatización".
Page Object model is used in spite of what Cypress site says, it increases readability of code and is much easier to manage


### Requirements 🧰

- **Enviromeent:** Windows 11  v23H2
- **Browser:** Google Chrome v124.0.6367.119
- Node.js
- NPM
  
### How to run 🎯

You need to have Node.js installed before using Cypress. You can find more information [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

For rest of the installations move to project folder in command prompt and type

    npm install

which will install Cypress and other supporting tools.

To run tests type

    npx cypress open 

## Exercise 3
### Description 📖
Do an test automation of Swagger Petshop API with Karate 

### Requirements 🧰

- **Enviromeent:** Windows 11 v23H2
- Node.js
- NPM
  
### How to run 🎯

You need to have Node.js installed before using Karate. You can find more information [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

For rest of the installations move to project folder in command prompt and type

    npm install

which will install Karate and other supporting tools.

To run all the tests type

    npm run test karate

To run a specific test type

    npm run test karate/test.feature


Done by: Antonio Seoane
