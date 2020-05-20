const WorkoutService = {
    getAllWorkouts(knex) {
        return knex.select('*').from('workouts')
    }
};

module.exports = WorkoutService;