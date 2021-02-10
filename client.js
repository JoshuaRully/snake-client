const net = require('net');
const { IP, PORT, PASSWORD, playerName } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    password: PASSWORD,
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Connected');
  });
  conn.on('connect', () => {
    conn.write(`Name: ${playerName}`);
  });
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: left');   
  //   }, 50)
  // });
  return conn;
};

module.exports = { connect };