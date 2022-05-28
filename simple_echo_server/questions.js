const HTTP = require('http');
const PORT = 3000;

//the createServer method is ran for sure!

//Question why did it run when req and res is not defined
//it is not even giving any error

//I think this is just creating the server and saying that it will receive
//two objects req and res as the input for a callback function

//and when we make a request on the client, this createServer function
//keeps executing
const SERVER = HTTP.createServer((req, res) => {
  console.log(req);

});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

