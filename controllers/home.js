const { User } = require('../models');

const home = {
    async index(req, res) {
        try {
            const users = await User.findAll();
            res.render('home', { users });
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).send('Error loading homepage');
        }
    },
};

module.exports = home;