// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
    
    if(key === "b"){
        process.exit()

    }
    else if(key === "w"){
        conn.log("Move: up")
    }
    else if(key === "a"){
        console.log("Move: left")
    }
    else if(key === "s"){
        console.log("Move: down")
    }
    else if(key === "d"){
        console.log("Move: right")
    }
    else if(key === "l"){
        conn.write("hiiiii")
    }
    else if(key === "c"){
        conn.write("byeeee")
    }
    // your code here
  };
  //var x = key;

// If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.


const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", key=> {handleUserInput(key)});
    return stdin;
  };
 

  module.exports = {setupInput}