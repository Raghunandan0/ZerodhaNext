// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const cors = require('cors');

// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// Load environment variables
require('dotenv').config();

// Core modules
const express = require('express');
const cors = require('cors');

// Custom modules
const connectDB = require('./config/db');            // ✅ Ensure this exists
const authRoutes = require('./routes/authRoutes');   // ✅ Correct path to routes

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Auth Routes
app.use('/api/auth', authRoutes);

// Optional: Health check route
app.get('/', (req, res) => {
  res.send('✅ Zerodha Clone API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
