// index.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const passport = require('./config/passport');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

// Routes
app.use('/api', authRoutes);

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
