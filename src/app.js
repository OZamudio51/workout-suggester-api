require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { DATABASE_URL } = require('./config');
const helmet = require('helmet');
const knex = require('knex');
const { NODE_ENV } = require('./config');
const workoutRouter = require('./workout-router');


const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

  db = knex({
      client: 'pg',
      connection: DATABASE_URL,
  });

  app.set('db', db);

app.use(morgan(morganOption));
app.use(helmet());

app.use(cors());

app.use('/api/workouts', workoutRouter);

app.get('/', (req, res) => {
    res.json({ok : true});
});;



app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        repsonse = { message : error.message, error }
    }
    res.status(500).json(response)
});



module.exports = app;