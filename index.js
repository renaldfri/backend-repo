// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port
const PORT = 3000;

// Create a route for the API
app.get('/api/hello', (req, res) => {
  res.send('Hello');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
