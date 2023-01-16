// contract test code will go here mocha 
// we'll use the mocha testing framework to test our contract. using a local network to test our contract , Ganache/TestRPC 
// We'll take the ABI to feedback the in the web3 lib 

const assert = require('assert'); // makes assertions about the test 
const ganache = require('ganache-cli'); // local test network
const Web3 = require('web3') // Web3 is a constructor func 

const web3 =  new Web3(ganache.provider()); // instance of web3