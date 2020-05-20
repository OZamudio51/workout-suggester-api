const express = require('express');
// const WorkoutService = require('./workout-service');

const workoutRouter = express.Router();

const serializeWorkout = workout => ({
    id: id,
  bodypart: '',
  name: '',
  video: '',
  desc: '',
})

workoutRouter
.route('/').get((req, res, next) => {
    // const knexInstance = req.app.get('db')
    // .then(workout => {
    //     console.log(workout)
    // })
    // .catch(next)
    res.send({workout: true})
})

module.exports = workoutRouter;