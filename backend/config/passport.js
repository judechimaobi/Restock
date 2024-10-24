// config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const db = require('../db');

require('dotenv').config();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const res = await db.query('SELECT * FROM Users WHERE id = $1', [id]);
        done(null, res.rows[0]);
    } catch (err) {
        done(err, null);
    }
});

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if social account exists
        const socialRes = await db.query(
            'SELECT * FROM SocialAccounts WHERE provider = $1 AND provider_user_id = $2',
            ['google', profile.id]
        );

        if (socialRes.rows.length > 0) {
            const user = await db.query('SELECT * FROM Users WHERE id = $1', [socialRes.rows[0].user_id]);
            return done(null, user.rows[0]);
        } else {
            // Create new user
            const newUserRes = await db.query(
                'INSERT INTO Users (name, email) VALUES ($1, $2) RETURNING *',
                [profile.displayName, profile.emails[0].value]
            );

            const newSocialRes = await db.query(
                'INSERT INTO SocialAccounts (user_id, provider, provider_user_id) VALUES ($1, $2, $3)',
                [newUserRes.rows[0].id, 'google', profile.id]
            );

            return done(null, newUserRes.rows[0]);
        }
    } catch (err) {
        return done(err, null);
    }
}));

// Facebook Strategy
passport.use(new FacebookStrategy({
	clientID: process.env.FACEBOOK_APP_ID,
	clientSecret: process.env.FACEBOOK_APP_SECRET,
	callbackURL: process.env.FACEBOOK_CALLBACK_URL,
	profileFields: ['id', 'displayName', 'emails']
}, async (accessToken, refreshToken, profile, done) => {
	try {
		// Check if social account exists
		const socialRes = await db.query(
			'SELECT * FROM SocialAccounts WHERE provider = $1 AND provider_user_id = $2',
			['facebook', profile.id]
		);

		if (socialRes.rows.length > 0) {
			const user = await db.query('SELECT * FROM Users WHERE id = $1', [socialRes.rows[0].user_id]);
			return done(null, user.rows[0]);
		} else {
			// Create new user
			const email = profile.emails && profile.emails[0].value ? profile.emails[0].value : `${profile.id}@facebook.com`;
			const newUserRes = await db.query(
				'INSERT INTO Users (name, email) VALUES ($1, $2) RETURNING *',
				[profile.displayName, email]
			);

			const newSocialRes = await db.query(
				'INSERT INTO SocialAccounts (user_id, provider, provider_user_id) VALUES ($1, $2, $3)',
				[newUserRes.rows[0].id, 'facebook', profile.id]
			);

			return done(null, newUserRes.rows[0]);
		}
	} catch (err) {
		return done(err, null);
	}
}));

module.exports = passport;
