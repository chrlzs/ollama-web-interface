const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint to communicate with Ollama
app.use(express.json());
app.post('/api/query', async (req, res) => {
  const { query } = req.body;

  // Replace this with actual interaction with Ollama (e.g., via a Python server, shell command, or SDK)
  const mockResponse = {
    response: `You asked: "${query}"`,
  };

  res.json(mockResponse);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});