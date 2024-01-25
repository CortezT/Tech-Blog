const { User } = require('../models');
const bcrypt = require('bcrypt');

const auth = {
    getLoginPage(req, res) {
        res.render('login');
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });

            if (user && (await bcrypt.compare(password, user.password))) {
                req.session.userId = user.id;
                return res.redirect('/dashboard');
            }

            return res.redirect('/login?error=Invalid credentials');
        } catch (error) {
            console.error('Login error:', error);
            return res.status(500).send('Error during login');
        }
    },

    getSignupPage(req, res) {
        res.render('signup');
    },

    signup: async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log({ username, email, password: hashedPassword });

            await User.create({ username, email, password: hashedPassword });
            res.redirect('/dashboard');
        } catch (error) {
            console.error('Signup error:', error);
            res.status(500).send('Error during signup');
        }
    },

    logout(req, res) {
        req.session.destroy(() => {
            res.redirect('/');
        });
    },
};

module.exports = auth;