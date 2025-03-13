const express = require('express');
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const generalRoutes = require('./routes/generalRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/', generalRoutes);
app.use('/user', userRoutes);

// 404 Error Handling
app.use((req, res) => {
  res.status(404).json({ error: '404 - Page not found' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
