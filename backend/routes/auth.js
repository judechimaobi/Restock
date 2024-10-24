// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const db = require('../db');
require('dotenv').config();

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Sign Up
router.post('/signup', async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        // Check if user exists
        const userExists = await db.query('SELECT * FROM Users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        const newUser = await db.query(
            'INSERT INTO Users (name, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, hashedPassword, phone]
        );

        // Generate JWT
        const token = jwt.sign({ id: newUser.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, user: newUser.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const userRes = await db.query('SELECT * FROM Users WHERE email = $1', [email]);
        if (userRes.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = userRes.rows[0];

        // Compare password
        if (!user.password) {
            return res.status(400).json({ message: 'Please login with social account' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Recover Password
router.post('/recover-password', async (req, res) => {
    const { email } = req.body;
    try {
        // Check if user exists
        const userRes = await db.query('SELECT * FROM Users WHERE email = $1', [email]);
        if (userRes.rows.length === 0) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        // TODO: Implement email sending with a reset token
        // For simplicity, we'll assume password reset is done

        res.json({ message: 'Password recovery instructions sent to your email.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get User Details (Protected Route)
router.get('/me', authenticateToken, async (req, res) => {
    try {
        const userRes = await db.query('SELECT id, name, email, phone FROM Users WHERE id = $1', [req.user.id]);
        res.json(userRes.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Google OAuth Routes
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        // Generate JWT
        const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Redirect or send token as response
        res.json({ token, user: req.user });
    }
);

// Facebook OAuth Routes
router.get('/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
);

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { session: false }),
    (req, res) => {
        // Generate JWT
        const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Redirect or send token as response
        res.json({ token, user: req.user });
    }
);


router.post('/auth/google', async (req, res, next) => {
    passport.authenticate('google-token', { session: false }, (err, user, info) => {
        if (err) return res.status(400).json(err);
        if (!user) return res.status(404).json({ message: 'User not found' });
        // Generate JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user });
    })(req, res, next);
});

// Facebook OAuth Handler
router.post('/auth/facebook', async (req, res, next) => {
    passport.authenticate('facebook-token', { session: false }, (err, user, info) => {
        if (err) return res.status(400).json(err);
        if (!user) return res.status(404).json({ message: 'User not found' });
        // Generate JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user });
    })(req, res, next);
});

module.exports = router;

module.exports = router;
