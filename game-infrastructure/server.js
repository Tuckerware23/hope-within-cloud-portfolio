const express = require('express');
const app = express();

// Use JSON middleware to parse JSON bodies
app.use(express.json());

// Example route: health check
app.get('/status', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Example route: start a battle (stub)
app.post('/battle', (req, res) => {
  // In a real implementation, you would process the battle request here.
  // For now, send back a placeholder response.
  const { playerId, enemyId } = req.body;
  res.json({
    message: 'Battle simulated successfully',
    playerId,
    enemyId,
    result: 'Player wins!'
  });
});

// Define the port from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Game server listening on port ${port}`);
});
