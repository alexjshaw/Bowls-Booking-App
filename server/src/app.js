const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const rinksRoute = require('./routes/rinks');

const app = express();

app.use('/api', rinksRoute);
