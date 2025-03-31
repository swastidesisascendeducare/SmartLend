
# SmartLend: Empowering Wealth, One Loan at a Time

![SmartLend Logo](frontend/src/assets/SmartLendLogo5.png)

Welcome to **SmartLend**, a cutting-edge peer-to-peer lending platform designed to connect borrowers and lenders seamlessly. Whether you're seeking a loan to fuel your dreams or looking to invest in opportunities, SmartLend leverages modern technology—machine learning, OCR, and a robust full-stack architecture—to make lending smarter, faster, and more secure.

---

## 🌟 Features

- **Borrower Empowerment**: Apply for loans with an intuitive dashboard and streamlined application process.
- **Lender Opportunities**: Fund loans, track investments, and review agreements through a dedicated lender portal.
- **Smart Evaluation**: Machine learning (XGBoost) powers credit scoring and loan approval decisions.
- **Document Verification**: OCR technology ensures quick and accurate processing of uploaded documents.
- **Secure & Transparent**: Firebase-backed authentication and MongoDB for reliable data management.
- **Real-Time Tracking**: Monitor repayments, transactions, and loan statuses effortlessly.

---

## 🛠️ Technologies Used

- **Frontend**: React, Tailwind CSS, Firebase (authentication & config)
- **Backend**: Node.js, Express.js, MongoDB (via `mongo_client.py`)
- **Machine Learning**: Python, XGBoost (`xgb_model.pkl`)
- **OCR Service**: Node.js
- **Tools**: Git, npm, pip, Vercel (deployment config)

---

## 📂 Project Structure

```
📦 SmartLend
├─ .gitignore                # Git ignore rules
├─ ML_Model                  # Machine Learning service
│  ├─ mlServer.py           # ML server script
│  └─ xgb_model.pkl         # Trained XGBoost model
├─ Mongobackend              # Mixed Python/Node.js backend (possibly experimental)
│  ├─ api                   # API endpoints (Python)
│  ├─ database              # MongoDB integration
│  ├─ mlServer.py           # ML server (Python)
│  ├─ ml_models             # ML model storage
│  ├─ requirements.txt      # Python dependencies
│  ├─ schemas.py            # Data schemas
│  ├─ services              # Business logic (e.g., loan evaluation)
│  └─ updated_backend       # Node.js backend (updated version?)
│     ├─ .env              # Environment variables
│     ├─ config            # Configuration files
│     ├─ controllers       # Request handlers
│     ├─ package.json      # Node.js dependencies
│     ├─ routes            # API routes
│     ├─ server.js         # Main server script
│     └─ xgb_model.pkl     # ML model copy
├─ backend                   # Primary Node.js backend
│  ├─ db.js                # Database config
│  ├─ models               # Data models
│  ├─ routes               # API routes
│  └─ server.js            # Main server script
├─ frontend                  # React frontend
│  ├─ public               # Static assets
│  ├─ src                  # Source code
│  │  ├─ assets            # Images (e.g., SmartLend logos)
│  │  ├─ components        # Reusable UI components
│  │  ├─ pages             # Page components
│  │  ├─ firebaseConfig.js # Firebase setup
│  │  └─ [other files]     # App logic, styles, etc.
│  ├─ package.json         # Dependencies
│  └─ tailwind.config.js   # Tailwind CSS config
├─ ocr_backend               # OCR service
│  ├─ index.js             # Main script
│  ├─ package.json         # Dependencies
│  └─ uploads              # Sample uploaded files
├─ README.md                # You’re reading it!
└─ package.json             # Root-level dependencies (if any)
```


---

## 🚀 Getting Started

Follow these steps to set up SmartLend locally:

### Prerequisites
- **Node.js** (v16+ recommended)
- **Python** (3.9+ for ML components)
- **npm** (comes with Node.js)
- **pip** (Python package manager)
- **Git**

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/smartlend.git
   cd smartlend
   ```

2. **Set Up Each Component**

   - **Frontend**
     ```bash
     cd frontend
     npm install
     ```
      - **Mongobackend **
     ```bash
     cd Mongobackend
     pip install -r requirements.txt
     cd updated_backend
     npm install
     ```

   - **OCR Backend**
     ```bash
     cd ocr_backend
     npm install
     ```


  

3. **Configure Environment Variables**
   - Create `.env` files in `backend`, `updated_backend`, and `ocr_backend` with required keys (e.g., `MONGO_URI`, `FIREBASE_API_KEY`, `ML_MODEL_PATH`).
   - Example for `backend/.env`:
     ```
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/smartlend
     ```

4. **Run the Services**
   - **Frontend**
     ```bash
     cd frontend
     npm start  # Runs on http://localhost:3000
     ```
     - **Mongobackend**
     ```bash
     cd Mongobackend
     uvicorn mlServer:app --reload # Python backend
     cd updated_backend
     node server.js      # Node.js backend
     ```
   - **OCR Backend**
     ```bash
     cd ocr_backend
     node index.js  # Runs on http://localhost:5001 (adjust port)
     ```
   
   

---

## 🎮 Usage

1. **Access the App**: Open `http://localhost:3000` in your browser.
2. **Sign Up/Login**: Create an account as a borrower or lender.
3. **Borrowers**: Navigate to the loan application page, upload documents via OCR, and track your application.
4. **Lenders**: Browse loan listings, fund opportunities, and monitor your portfolio.
5. **Admin (if applicable)**: Use backend APIs to manage users and loans.

---

## 🤝 Contributing

We’d love your help to make SmartLend even better!

1. Fork the repo.
2. Create a branch: `git checkout -b feature/amazing-feature`.
3. Commit your changes: `git commit -m "Add amazing feature"`.
4. Push to your branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request with a clear description.

---

## 📜 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## 🌐 Connect With Us

- **Email**: smartlend25@gmail.com

Built with 💻 and ❤️ by the SmartLend Team.
```

