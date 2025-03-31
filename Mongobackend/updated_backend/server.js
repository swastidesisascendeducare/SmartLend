const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debugging connection issues

const app = express();
const PORT = process.env.PORT || 5001;

// CORS Configuration
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // Allow frontend requests
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Middleware for JSON parsing
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// ✅ Import Models
const Loan = require("./models/loanModel"); // Fix for "Loan is not defined"

// ✅ Import Routes
const borrowerRoutes = require('./routes/borrowerRoutes');
const lenderRoutes = require('./routes/lenderRoutes');
const loanRoutes = require('./routes/loanRoutes'); // Loan routes already handle `/match/:borrowerId`
const transactionRoutes = require("./routes/transactionRoutes");
const authRoutes = require('./routes/authRoutes');
const testRoute = require('./routes/test');
const aiRoutes = require('./routes/aiRoutes')


app.use('/api/borrowers', borrowerRoutes);
app.use('/api/lenders', lenderRoutes);
app.use('/api/loans', loanRoutes); // This handles `/api/loans/match/:borrowerId`
app.use("/api/transactions", transactionRoutes);
app.use("/api/ai",aiRoutes);
app.use('/api/auth', authRoutes); // Register/authentication route
app.use('/api', testRoute);

// ✅ Sample API Route to check if the server is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

