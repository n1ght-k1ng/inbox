// contract test code will go here mocha 
// we'll use the mocha testing framework to test our contract. using a local network to test our contract , Ganache/TestRPC 
// We'll take the ABI to feedback the in the web3 lib 

// const { CallTracker } = require('assert');
const assert = require('assert'); // makes assertions about the test 
const ganache = require('ganache-cli'); // local test network
const Web3 = require('web3') // Web3 is a constructor func 
const {interface ,bytecode} = require('../compile') //ABI and bytecode from compile.js
const web3 =  new Web3(ganache.provider()); 
const INITIAL_STRING = 'Hi there'// instance of web3
let accounts 
let inbox 
beforeEach(async ()=>{
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()
    // .then(fetchedAccounts => {  
    //     console.log(fetchedAccounts)
    // })

    // Deploying the contract
                                        // ABI
    inbox = await new web3.eth.Contract(JSON.parse(interface)) // Contract - constructor func to interact or deploy new contract
    .deploy({data:bytecode , arguments: [INITIAL_STRING]}) // deploy - method to stage a deploy of a  new contract
    .send({from: accounts[0],gas:'1000000'}) // send - method to send the contract transaction to the network which indeed gets deployed
    
})
describe('Inbox',()=>{
    it('deploys a contract',()=>{
        assert.ok(inbox.options.address) // ok-checks whether the value is a defined value or not.Test fails when the value is not`defined
    })
    it('has a default message',async () =>{
        const message = await inbox.methods.message().call()
        assert.equal(message, INITIAL_STRING)

    })
    it('can change the message',async () =>{
        await inbox.methods.setMessage('bye').send({from:accounts[0]})
        const message = await inbox.methods.message().call()
        assert.equal(message,'bye')
    })

})
    

    // we're accessing the eth module of the web3 library to get a list of all accounts
    // since the function is asynchronous, we use the then() function to get the list of accounts
    // Use one of those accounts to deploy the contract


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


// demo test res 
// Inbox
// ✔ deploys a contract


// 1 passing (50ms)

// [
// '0xfF3573bE5d18873E5A6684B94EE0f2A1b4145bE4',
// '0xc9647fF5D0D5aB103F3Eb9362612d4a327e9745C',
// '0xaaEEE189E1b923D636B597B0b423814AdBded4EE',
// '0x4928145676d2f71F1b9d747B6f3E52b7e6046112',
// '0x59fa0ED7763CDB08928DfD44F2922Ba7219fc490',
// '0x96F275fC764efC89c23E1A3bD2E4218e3C0F080b',
// '0x6722D3B6B00a90561c8553cfD67506a0b14D9e2a',
// '0x8D586c271449932B863CFA1e6e9C1c61f8dF017F',
// '0xAfD53266AA37a367aB712aAfCd07Fe024c0e7F51',
// '0xF17948F2beC5EF36F27094E5415Ac5f53b5F9A9B'
// ]