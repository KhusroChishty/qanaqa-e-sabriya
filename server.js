const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like your index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Simple API route
app.get('/api/contact', (req, res) => {
  res.json({
    email: 'info@qanaqaesabriya.org',
    message: 'Feel free to reach out to us!'
  });
});

// Catch-all route to serve index.html for any other requests (if using client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
