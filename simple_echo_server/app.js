const HTTP = require('http');
const PORT = 3000;

const SERVER = HTTP.createServer((req, res) => {

});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
