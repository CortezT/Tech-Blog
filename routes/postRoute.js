const express = require('express');
const router = express.Router();

// Route to retrieve all posts
router.get('/', (req, res) => {
    // Handle logic for retrieving all posts
    res.send('Retrieve all posts');
});

// Route to retrieve a specific post by ID
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    // Handle logic for retrieving a specific post by ID
    res.send(`Retrieve post with ID ${postId}`);
});

// Route to create a new post
router.post('/', (req, res) => {
    const { title, content } = req.body;
    // Handle logic for creating a new post
    res.send(`Create a new post - Title: ${title}, Content: ${content}`);
});

// Route to update a specific post by ID
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    // Handle logic for updating a specific post by ID
    res.send(`Update post with ID ${postId} - New title: ${title}, New content: ${content}`);
});

// Route to delete a specific post by ID
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    // Handle logic for deleting a specific post by ID
    res.send(`Delete post with ID ${postId}`);
});

module.exports = router;