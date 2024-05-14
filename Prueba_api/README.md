## Exercise 3
### Description 📖
Do an test automation of Swagger Petshop API with Karate. 

The requirement to have a class whose constructor depended on the previous task could not be carried out due to the limitations of the Karate framework.

In the official documentation there are no declarations of the use of classes and it is even established that in the feature
only js files containing a single function can be required

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

