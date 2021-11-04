const { Server } = require("http");
const { IP, PORT } = require("./constants");

const net = require("net");
// establishes a connection with the game server

const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port:  PORT
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("data",data =>{console.log(data)
    console.log("The connection is established")})

    console.log("I'm here")
    conn.on("data", name => conn.write("Name: [SNK]"))
    //conn.write("Move: up")

    conn.on('connection', (client) => {
      console.log('New client connected!');
      client.write('Hello there!');
    });
    return conn;
  };

module.exports = { connect };
