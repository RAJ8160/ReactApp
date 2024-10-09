const mongoose = require('mongoose');

const dbURI = process.env.MONGO_CONN; // Adjust this to your MongoDB URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));
