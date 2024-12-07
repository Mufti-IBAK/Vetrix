const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); // Load environment variables from .env file

const app = express();

connectDB(); // Connect to MongoDB

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// Import routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // Use user-related routes

module.exports = app;
