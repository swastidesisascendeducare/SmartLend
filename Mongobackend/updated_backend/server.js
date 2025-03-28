const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debug line

const app = express();
const PORT = process.env.PORT || 5001;

//CORS
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and credentials
}));


// Middleware
// app.use(express.json());
app.use((req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
      express.json()(req, res, next);
    } else {
      next();
    }
  });
  

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import Routes
const borrowerRoutes = require('./routes/borrowerRoutes');
const lenderRoutes = require('./routes/lenderRoutes');
const loanRoutes = require('./routes/loanRoutes');
const transactionRoutes = require("./routes/transactionRoutes");
// const borrowerProfileRoutes = require("./routes/borrowerProfileRoutes");
// const lenderProfileRoutes = require('./routes/lenderProfileRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ Import route
const aiRoutes = require('./routes/aiRoutes')


app.use('/api/borrowers', borrowerRoutes);
app.use('/api/lenders', lenderRoutes);
app.use('/api/loans', loanRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/ai",aiRoutes);
// app.use("/api/borrower-profile", borrowerProfileRoutes);
// app.use('/api/lender', lenderProfileRoutes);
app.use('/api/auth', authRoutes); //register route
const testRoute = require('./routes/test');
app.use('/api', testRoute);


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
