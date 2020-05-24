const knex = require('knex');
const app = require('../src/app');
const { workoutsArray } = require('./workouts.fixtures');

describe('Workouts Endpoints', function() {
    context('Given there are workouts in the database', () => {
        const testWorkouts = workoutsArray();

        it('responds with 200 and all of the workouts', () => {
            return supertest(app)
              .get('/api/workouts')
              .expect(200, testWorkouts)
        });
    });
});