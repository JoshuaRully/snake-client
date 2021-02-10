const { msg } = require('./constants');
let connection;
const { mvmt } = require('./constants');
const handUserInput = (data) => {
  if (data === '\u0003') {
    console.log("Ciao Bello!");
    process.exit();
  }
  if (data === mvmt.up) {
    connection.write('Move: up');
    }
  if (data === mvmt.left) {
    connection.write('Move: left');
  }
  if (data === mvmt.down) {
    connection.write('Move: down');
  }
  if (data === mvmt.right) {
    connection.write('Move: right');
  }
  if (data === 'r') {
    connection.write(`Say: ${msg}`)
  }
};
const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handUserInput)
  return stdin;
};

module.exports = { setupInput };