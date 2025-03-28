import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Tesseract from 'tesseract.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// OCR Processing Route
app.post('/api/ocr', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const imagePath = path.join(__dirname, req.file.path);
    console.log(`Processing OCR for file: ${imagePath}`);

    const { data: { text } } = await Tesseract.recognize(imagePath, 'eng', {
      logger: m => console.log(m), // Logs progress
    });

    console.log('OCR Result:', text);

    // Cleanup: Delete the image after processing
    fs.unlinkSync(imagePath);

    res.json({ text });
  } catch (error) {
    console.error('OCR Error:', error);
    res.status(500).json({ error: 'Failed to process OCR' });
  }
});

// Health Check
app.get('/', (req, res) => {
  res.send('OCR API is running...');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
