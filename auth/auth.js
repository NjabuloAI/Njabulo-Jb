const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// Generate token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Verify credentials
  const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
  res.json({ token });
});

// Verify token
app.use((req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ error: 'Invalid token' });
  }
});