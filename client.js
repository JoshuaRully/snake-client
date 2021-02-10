const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    password: 396035,
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Connected');
  });
  conn.on('connect', () => {
    conn.write('Name: JMR');
  });
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: left');   
  //   }, 50)
  // });
  return conn;
};

module.exports = { connect };