// compile code will go here
// we have to read the contents of the file inbox.sol and compile it 

const path = require('path'); // cross platform compatibility
const fs = require('fs');
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];

