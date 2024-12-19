const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const memeRoutes = require('./routes/router');       // Adjust path if necessary
const playlistRoutes = require('./routes/playlist'); // Adjust path if necessary
const bookingRoutes = require('./routes/booking');   // Adjust path if necessary

// Use routes
app.use('/api/memes', memeRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/bookings', bookingRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
