from fastapi import FastAPI, HTTPException, Query
import joblib
import numpy as np
from pydantic import BaseModel
from datetime import datetime
from pymongo import MongoClient
import os
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import logging

# Setup logging to file for detailed errors
logging.basicConfig(
    filename="app_error.log",
    level=logging.ERROR,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

# Load ML Model
model_path = os.path.join(os.path.dirname(__file__), "xgb_model.pkl")
try:
    model = joblib.load(model_path)
    print("Model loaded successfully!")
except Exception as e:
    logging.error(f"Error loading model: {str(e)}", exc_info=True)
    raise Exception(f"Failed to load model: {str(e)}")

# FastAPI App
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change to specific origins if needed)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (POST, GET, OPTIONS, etc.)
    allow_headers=["*"],
)

# MongoDB Connection
MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv://aroravidhi342:d615cAVlM5MnM5l2@cluster0.gzo5b.mongodb.net/loan_db?retryWrites=true&w=majority",
)
try:
    client = MongoClient(MONGO_URI)
    db = client["loan_db"]
    print("MongoDB connected successfully!")
except Exception as e:
    logging.error(f"Error connecting to MongoDB: {str(e)}", exc_info=True)
    raise Exception(f"Failed to connect to MongoDB: {str(e)}")

# Request Body Schema (Including name, email, phoneNumber)
class LoanRequest(BaseModel):
    name: str
    email: str  # Removed EmailStr to avoid validator issues
    phoneNumber: str
    age: int
    income: float
    loanAmount: float
    creditScore: int
    monthsEmployed: int
    numCreditLines: int
    interestRate: float
    dtiRatio: float
    education: str
    employmentType: str
    maritalStatus: str
    hasMortgage: int
    hasDependents: int
    loanPurpose: str
    hasCoSigner: int


# **API Route to Predict Loan Approval**
@app.post("/predict-loan")
def predict_loan(data: LoanRequest):
    try:
        # Debugging: Print the raw input data
        print("Received data:", data.dict())

        # Prepare input data for the ML model (excluding name, email, phoneNumber)
        education_mapping = {
            "Bachelors": 1,
            "Masters": 2,
            "Doctorate": 3,
            "Others": 0,
        }

        employment_mapping = {
            "Salaried": 1,
            "SelfEmployed": 2,
            "Unemployed": 3,
            "Others": 0,
        }

        marital_mapping = {
            "Married": 1,
            "Divorced": 2,
            "Widowed": 3,
            "Single": 0,
        }

        loan_purpose_mapping = {
            "Home": 1,
            "Car": 2,
            "Education": 3,
            "Business": 4,
            "Others": 0,
        }

        # Convert categorical data to numerical
        input_data = np.array(
            [
                data.age,
                data.income,
                data.loanAmount,
                data.creditScore,
                data.monthsEmployed,
                data.numCreditLines,
                data.interestRate,
                data.dtiRatio,
                education_mapping.get(data.education, 0),
                employment_mapping.get(data.employmentType, 0),
                marital_mapping.get(data.maritalStatus, 0),
                data.hasMortgage,
                data.hasDependents,
                loan_purpose_mapping.get(data.loanPurpose, 0),
                data.hasCoSigner,
            ]
        ).reshape(1, -1)

        # Optional: Print model feature names for debugging
        print("Model expects features:", model.feature_names_in_)

        # Predict using the ML model
        prediction = model.predict(input_data)[0]

        # Store all data + prediction in MongoDB
        loan_record = data.dict()
        loan_record["approved"] = int(prediction)
        loan_record["createdAt"] = datetime.now()  # Add timestamp
        db.borrowers.insert_one(loan_record)

        return {
            "name": data.name,
            "approved": int(prediction),
            "message": "Loan application processed successfully.",
        }

    except Exception as e:
        logging.error(f"Prediction error: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")


# **API Route to Get All Loan Applications**
@app.get("/get-loans")
def get_loans():
    try:
        # Fetch all loan records from MongoDB
        loans_cursor = db.borrowers.find({}, {"_id": 0})  # Exclude MongoDB _id
        loan_list = []

        # Serialize datetime fields if present
        for loan in loans_cursor:
            for key, value in loan.items():
                if isinstance(value, datetime):
                    loan[key] = value.strftime("%Y-%m-%d %H:%M:%S")
            loan_list.append(loan)

        return JSONResponse(content=loan_list)
    except Exception as e:
        logging.error(f"Error fetching loans: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Error fetching loans: {str(e)}")


# **API Route to Get Loan Applications by Email**
@app.get("/get-loan-by-email")
def get_loan_by_email(email: str = Query(..., description="Enter the applicant's email")):
    try:
        # Fetch loan records based on email
        loan_records = list(db.borrowers.find({"email": email}, {"_id": 0}))

        if not loan_records:
            raise HTTPException(status_code=404, detail="No loan records found for this email")

        # Serialize datetime fields if present
        for loan in loan_records:
            for key, value in loan.items():
                if isinstance(value, datetime):
                    loan[key] = value.strftime("%Y-%m-%d %H:%M:%S")

        return JSONResponse(content=loan_records)

    except Exception as e:
        logging.error(f"Error fetching loan by email: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Error fetching loan by email: {str(e)}")


# **Run Server**
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
