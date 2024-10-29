const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Example route to forward requests to another API
app.get('/api/v1/get-fruits', async (req, res) => {
  try {
    const url = 'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/';
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
