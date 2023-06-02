// Start a Server In Nodejs (Not in express or other frameWork)
const http = require("http");
const hostname = "localhost";
const port = 3003;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
   // HTTP status code (e.g., 200 for success)
  // res.setHeader("Content-Type", "text/html");
   // Set response header
  // res.end("<h1>Avengers Endgame and infinity war</h1>"); 
  // Send response to the client

  if (req.url === '/home' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Homecoming. Welcome!');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Life is a never ending learning process.');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Sorry, Page not found.');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// --------------------------------------------------------------------
