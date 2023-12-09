const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connectionResult = mongoose.connection;

connectionResult.on('error', (error) => {
    console.error('Error connecting to database:', error);
});

connectionResult.on('connected', () => {
    console.log('Connected to database');
});
