const { Post } = require('../models');

function handleDashboardError(error, res) {
    console.error('Dashboard error:', error);
    res.status(500).send('Error loading dashboard');
}

const dashboard = {
    getDashboard: async (req, res) => {
        try {
            const userId = req.session.userId;

            if (!userId) {
                return res.redirect('/login');
            }

            const posts = await Post.findAll({ where: { userId } });
            return res.render('dashboard', { posts });
        } catch (error) {
            handleDashboardError(error, res);
        }
    },
};

module.exports = dashboard;