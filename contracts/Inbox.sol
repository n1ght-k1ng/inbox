pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here

// specifies version of solidity 

contract Inbox{  // Defines a contract (just like a class) that wil have some methods or values 
    string public message; // Declaring instance vars that will exist in the contract 

    function Inbox(string initialMessage) public{ // constructor function automatically called when contract
    // is created 
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }        //funcname   //func type //return type
 
} 

// view - this keyword tells the compiler that we're not modifying any variables in the func. 
// it changes the way the function is called

// payable - when someone calls this they might send ether along

// returns = specify the type of return value (only used on function types view/ constant ) 

// when we declare a variable public in solidity, a function is created with the name of the variable to retrun the value of the variable when called