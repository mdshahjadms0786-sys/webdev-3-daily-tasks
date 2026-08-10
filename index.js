const http = require('http');

// Create server — callback fires on every request
const server = http.createServer((req, res) => {

  // Write response body
  res.write('<h1>Welcome to Node.js!</h1>');
  res.write('<p>Your first HTTP server is running.</p>');

  // End the response (required!)
  res.end();
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// Visit: http://localhost:3000 in your browser


