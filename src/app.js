const express = require('express');
const path = require('path');
const exec = require('child_process').exec;

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint to communicate with Ollama
app.use(express.json());

app.post('/api/query', async (req, res) => {
  const { query } = req.body;

  exec(`ollama-cli-command ${query}`, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: stderr });
    } else {
      res.json({ response: stdout });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});