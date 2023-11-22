const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { connectToDB } = require('./db/connect');

// Import routes
const rinksRoute = require('./src/routes/rinks');

// Create the Express application
const app = express();

// Apply middleware
app.use(cors()); // Enable CORS
app.use(helmet()); // Enhance API's security
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // Log HTTP requests

// Define routes
app.use('/rinks', rinksRoute);

// Connect to MongoDB and start the server
const port = process.env.PORT || 5000;

connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Failed to connect to MongoDB', error);
  process.exit(1);
});
