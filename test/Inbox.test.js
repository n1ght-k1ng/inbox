// contract test code will go here mocha 
// we'll use the mocha testing framework to test our contract. using a local network to test our contract , Ganache/TestRPC 
// We'll take the ABI to feedback the in the web3 lib 

const { CallTracker } = require('assert');
const assert = require('assert'); // makes assertions about the test 
const ganache = require('ganache-cli'); // local test network
const Web3 = require('web3') // Web3 is a constructor func 

const web3 =  new Web3(ganache.provider()); // instance of web3




// Testing with Mocha
// ----------------------------------------------------------------
// Mocha is a testing framework that allows us to write tests in JS
// Functions that are used to test are called it() functions
// Mocha will run all the it() functions and report back on the results
// ----------------------------------------------------------------
// Mocha has describe() function that allows us to group together similar tests
// describe() function takes two arguments: 1. string that describes the test 2. function that contains the test.
// ----------------------------------------------------------------
// Mocha has beforeEach() function that allows us to run some arbitrary code before each it() function
// beforeEach() function takes a function as an argument


// class Car {
//     park(){
//         return 'stopped';
//     }
//     drive(){
//         return 'vroom';
//     }
// }

// //testing with mocha 
// let car;
// beforeEach(()=>{
//     car = new Car()
// })
// describe('Car Class',() =>{
//     it('can park',()=>{
//         // const car = new Car()
//         assert.equal(car.park(),'stopped')  // assert.equal() is a mocha function that takes two arguments: 1. actual value 2. expected value

//     },)
//     it('Can drive',()=>{
//         // const car = new Car();
//         assert.equal(car.drive(),'vroom')
//     })
// })