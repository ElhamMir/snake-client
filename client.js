const { Server } = require("http");
const net = require("net");
// establishes a connection with the game server

const connect = function () {
    const conn = net.createConnection({
      host: "165.227.47.243",
      port:  50541
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("data",data =>{console.log(data)
    console.log("The connection is established")})
    console.log("I'm here")
    conn.on("data", name => conn.write("Name: [SNK]"))

    conn.on('connection', (client) => {
      console.log('New client connected!');
      client.write('Hello there!');
    });
    return conn;
  };

module.exports = { connect };
