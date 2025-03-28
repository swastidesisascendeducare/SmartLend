const admin = require('firebase-admin');
const serviceAccount = require('../config/service-account-key.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // ✅ Initialize Firebase Admin SDK
  databaseURL: "https://smartlend-4e7bd.firebaseio.com" // ✅ Replace with your Firebase project URL
});

// on 26th march
// Set SameSite in cookies to 'None'
const sessionCookieOptions = {
  sameSite: 'none',
  secure: true // Ensure it's secure when in production
};

module.exports = admin;
