// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debug line

// const app = express();
// const PORT = process.env.PORT || 5001;

// //CORS
// const cors = require('cors');

// app.use(cors({
//     origin: 'http://localhost:3000', // Allow requests from frontend
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow cookies and credentials
// }));


// // Middleware
// // app.use(express.json());
// app.use((req, res, next) => {
//     if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
//       express.json()(req, res, next);
//     } else {
//       next();
//     }
//   });
  

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Sample Route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // Import Routes
// const borrowerRoutes = require('./routes/borrowerRoutes');
// const lenderRoutes = require('./routes/lenderRoutes');
// const loanRoutes = require('./routes/loanRoutes');
// const transactionRoutes = require("./routes/transactionRoutes");
// // const borrowerProfileRoutes = require("./routes/borrowerProfileRoutes");
// // const lenderProfileRoutes = require('./routes/lenderProfileRoutes');
// const authRoutes = require('./routes/authRoutes'); // ✅ Import route


// app.use('/api/borrowers', borrowerRoutes);
// app.use('/api/lenders', lenderRoutes);
// app.use('/api/loans', loanRoutes);
// app.use("/api/transactions", transactionRoutes);
// // app.use("/api/borrower-profile", borrowerProfileRoutes);
// // app.use('/api/lender', lenderProfileRoutes);
// app.use('/api/auth', authRoutes); //register route
// const testRoute = require('./routes/test');
// app.use('/api', testRoute);
// //Loan match API route
// app.get("/api/loan/match/:borrowerId", async (req, res) => {
//   const borrowerId = req.params.borrowerId;
//   console.log("Received request for borrowerId:", borrowerId);

//   try {
//     // Fetch loans from MongoDB
//     const loans = await Loan.find({ borrowerId: borrowerId });
    
//     if (!loans.length) {
//       return res.status(404).json({ message: "No loans found for this borrower" });
//     }

//     res.json(loans);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });


// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

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

app.use('/api/borrowers', borrowerRoutes);
app.use('/api/lenders', lenderRoutes);
app.use('/api/loans', loanRoutes); // This handles `/api/loans/match/:borrowerId`
app.use("/api/transactions", transactionRoutes);
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

