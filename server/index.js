const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { connectToDB } = require('./database/connect');

const rinksRoute = require('./routes/rinks');
const clubRoute = require('./routes/club')
const userRoute = require('./routes/user')

const app = express();

// middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/rink', rinksRoute);
app.use('/club', clubRoute)
app.use('/user', userRoute)

// start server and connect to mongoDB
const port = process.env.PORT || 5000;

connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Failed to connect to MongoDB', error);
  process.exit(1);
});
