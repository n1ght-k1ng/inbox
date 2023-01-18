// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface , bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'liar twin exist relief file sun poverty front solution access air desert',
    'https://goerli.infura.io/v3/b889c245352540118f8d78b8baa934e8')
const web3 = new Web3(provider)
let accounts
const deploy = async () =>{
    accounts = await web3.eth.getAccounts()
    console.log('Attempting to deploy',accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode , arguments:['Hi there']})
    .send({ gas: 1000000, from: accounts[0]})



    
    console.log('Contract deployed to',result.options.address)
    provider.engine.stop()
}

deploy() 

//Contract deployed to 0x755b692c56B65eC11377be831Fb9Aa182704f5CD