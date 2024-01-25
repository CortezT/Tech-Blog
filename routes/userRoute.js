const express = require('express');
const router = express.Router();

// Route to retrieve all users
router.get('/', (req, res) => {
    // Handle logic for retrieving all users
    res.send('Retrieve all users');
});

// Route to retrieve a specific user by ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    // Handle logic for retrieving a specific user by ID
    res.send(`Retrieve user with ID ${userId}`);
});

// Route to create a new user
router.post('/', (req, res) => {
    const { name, email } = req.body;
    // Handle logic for creating a new user
    res.send(`Create a new user - Name: ${name}, Email: ${email}`);
});

// Route to update a specific user by ID
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    // Handle logic for updating a specific user by ID
    res.send(`Update user with ID ${userId} - New name: ${name}, New email: ${email}`);
});

// Route to delete a specific user by ID
router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    // Handle logic for deleting a specific user by ID
    res.send(`Delete user with ID ${userId}`);
});

module.exports = router;