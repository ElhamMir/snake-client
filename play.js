const { connect } = require('./client');

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
    if(key === "a"){
        process.exit()

    }
    // your code here
  };
  //var x = key;

// If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.


const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", key=> {handleUserInput(key)});
    return stdin;
  };
  
  
  setupInput()

console.log("Connecting ...");
connect();
module.exports = {setupInput}