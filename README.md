# Workout Suggester API


Link to live app: https://workout-suggester-ten-gilt.now.sh/

![Workout Suggester screenshot](workout-suggester-screenshot.PNG)

An application that suggest workouts based off of bodyparts. 

### Back-End
* PostgreSQL
* Express
* Node
* Knex

### Testing
* Mocha
* Chai
* Chai-http
* Jest

## API Overview

```text
/api
.
├──── GET
        ├── /workout
                ├── /workout/chest
                ├── /workout/legs
                ├── /workout/shoulders
                ├── /workout/back
                ├── /workout/arms
                ├── /workout/cardio
                ├── /workout/stretches-warmup
```
                
### GET `/api/workouts/`

```js
// res.body
{
  [
  id: workout.id,
  bodypart: workout.bodypart,
  workout_name: workout.workout_name,
  workout_video: workout.workout_video,
  workout_desc: workout.workout_desc,
  ]
}
```
