const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

// API route to fetch videos from a YouTube channel
app.get('/api/channel/videos', async (req, res) => {
    const { channelId, sortBy } = req.query; // Read channelId and sortBy params from the request
    const apiKey = process.env.YOUTUBE_API_KEY; // Load the API key from the .env file

    try {
        // Make a GET request to the YouTube Data API
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                channelId: channelId,
                order: sortBy || 'date', // If sortBy isn't specified, default to 'date'
                key: apiKey
            }
        });

        // Send back the API response data to the client
        res.json({ success: true, data: response.data });
    } catch (error) {
        // Handle errors and send an error response
        res.json({ success: false, message: 'Error fetching videos', error: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
