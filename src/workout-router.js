const express = require('express');
const WorkoutService = require('./workout-service');

const workoutRouter = express.Router();

const serializeWorkout = workout => ({
    id: workout.id,
  bodypart: workout.bodypart,
  workout_name: workout.workout_name,
  workout_video: workout.workout_video,
  workout_desc: workout.workout_desc,
});

workoutRouter
.route('/').get((req, res, next) => {
    const knexInstance = req.app.get('db')
    WorkoutService.getAllWorkouts(knexInstance)
    .then(workout => {
        res.json(workout.map(serializeWorkout))
    })
    .catch(next);
});

module.exports = workoutRouter;