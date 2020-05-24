module.exports ={
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.PORT || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres@localhost/workout-suggester',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
    'http://localhost:3000/api'
};