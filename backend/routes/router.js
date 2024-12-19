const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('Router is working');
});

module.exports = router; // Ensure you're exporting the router object
