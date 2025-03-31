
# SmartLend: Empowering Wealth, One Loan at a Time

![SmartLend Logo](frontend/src/assets/SmartLendLogo5.png)

Welcome to **SmartLend**, a cutting-edge peer-to-peer lending platform designed to connect borrowers and lenders seamlessly. Whether you're seeking a loan to fuel your dreams or looking to invest in opportunities, SmartLend leverages modern technology—machine learning, and a robust full-stack architecture—to make lending smarter, faster, and more secure.

---

## 🌟 Features

- **Borrower Empowerment**: Apply for loans with an intuitive dashboard and streamlined application process.
- **Lender Opportunities**: Fund loans, track investments, and review agreements through a dedicated lender portal.
- **Smart Evaluation**: Machine learning (XGBoost) powers credit scoring and loan approval decisions.
- **Secure & Transparent**: Firebase-backed authentication and MongoDB for reliable data management.
- **Real-Time Tracking**: Monitor repayments, transactions, and loan statuses effortlessly.

---

## 🛠️ Technologies Used

- **Frontend**: React, Tailwind CSS, Firebase (authentication & config)
- **Backend**: Node.js, Express.js, MongoDB
- **Machine Learning**: Python, XGBoost (`xgb_model.pkl`)
- **OCR Service**: Node.js
- **Tools**: Git, npm, pip

---

## 📂 Project Structure

```
📦 SmartLend
├─ .gitignore                # Git ignore rules
├─ Mongobackend              # Mixed Python/Node.js backend (possibly experimental)
│  ├─ api                   # API endpoint for ML model
│  ├─ database              # MongoDB integration (mongo_client.py)
│  ├─ mlServer.py           # ML server (Python)
│  ├─ ml_models             # ML model storage
│  ├─ requirements.txt      # Python dependencies
│  ├─ schemas.py            
│  ├─ services              # Business logic (i.e loan evaluation)
│  └─ updated_backend       # Node.js backend (updated version?)
│     ├─ .env              # Environment variables
│     ├─ config            
│     ├─ controllers       # Request handlers
│     ├─ package.json      # Node.js dependencies
│     ├─ routes            # API routes
│     ├─ server.js         # Main server script
│     └─ xgb_model.pkl     # ML model copy
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
├─ README.md                # You’re reading it!
└─ package.json             # Root-level dependencies (if any)
```


---

## 🚀 Getting Started

Follow these steps to set up SmartLend locally:

### Prerequisites
- **Node.js** 
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
     node index.js  
     ```
   
   

---

## Usage

1. **Access the App**: Open `http://localhost:3000` in your browser.
2. **Sign Up/Login**: Create an account as a borrower or lender.
3. **Borrowers**: Navigate to the loan application page, apply for loan and track your application.
4. **Lenders**: Browse loan listings, fund opportunities, and monitor your portfolio.

---

## Contributing

We’d love your help to make SmartLend even better!

1. Fork the repo.
2. Create a branch: `git checkout -b branch_new`.
3. Commit your changes: `git commit -m "Add new branch"`.
4. Push to your branch: `git push origin branch_new`.
5. Open a Pull Request with a clear description.

---

## Connect With Us

- **Email**: smartlend25@gmail.com

Built with 💻 and ❤️ by the SmartLend Team.
```

