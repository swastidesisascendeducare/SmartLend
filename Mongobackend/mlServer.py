from fastapi import FastAPI
import joblib
import numpy as np
from pydantic import BaseModel
from pymongo import MongoClient
import os

# Load ML Model
model = joblib.load("./xgb_model.pkl")

# FastAPI App
app = FastAPI()

# MongoDB Connection
MONGO_URI = os.getenv("MONGODB_URI", "mongodb+srv://aroravidhi342:d615cAVlM5MnM5l2@cluster0.gzo5b.mongodb.net/loan_db?retryWrites=true&w=majority")
client = MongoClient(MONGO_URI)
db = client["loan_db"]

# **Feature Order - Print this to verify with Model**
print("Expected Features:", model.feature_names_in_)

# Request Body Schema
class LoanRequest(BaseModel):
    LoanID: str
    Age: int
    Income: int
    LoanAmount: int
    CreditScore: int
    MonthsEmployed: int
    NumCreditLines: int
    InterestRate: float
    LoanTerm: int
    DTIRatio: float
    Education: str 
    EmploymentType: str 
    MaritalStatus: str 
    HasMortgage: str 
    HasDependents: str 
    LoanPurpose: str 
    HasCoSigner: str 

# **Manual Mapping for Categorical Features**
education_map = {"High School": 3, "Bachelor's": 2, "Master's": 1, "PhD": 0}
employment_type_map = {"Full-time": 0, "Part-time": 1, "Self-employed": 2, "Unemployed": 2}
marital_status_map = {"Single": 0, "Married": 1, "Divorced": 2}
loan_purpose_map = {"Home": 0, "Auto": 1, "Education": 2, "Business": 3, "Other": 4}

# **Function to safely map categorical values**
def safe_map(mapping, value):
    return mapping.get(value, 0)  # Default to 0 if unseen

# *API Route to Predict Loan Approval*
@app.post("/predict-loan")
def predict_loan(data: LoanRequest):
    try:
        # Encode categorical features
        education = safe_map(education_map, data.Education)
        employment_type = safe_map(employment_type_map, data.EmploymentType)
        marital_status = safe_map(marital_status_map, data.MaritalStatus)
        loan_purpose = safe_map(loan_purpose_map, data.LoanPurpose)

        # Convert boolean-like features
        has_mortgage = int(str(data.HasMortgage).strip().lower() in ["yes", "true", "1"])
        has_dependents = int(str(data.HasDependents).strip().lower() in ["yes", "true", "1"])
        has_co_signer = int(str(data.HasCoSigner).strip().lower() in ["yes", "true", "1"])

        # Convert input to model format
        input_data = np.array([
            data.Age, data.Income, data.LoanAmount, data.CreditScore,
            data.MonthsEmployed, data.NumCreditLines, data.InterestRate,
            data.DTIRatio, education, employment_type,
            marital_status, has_mortgage, has_dependents, loan_purpose, has_co_signer
        ], dtype=np.float32).reshape(1, -1)

        # Debug: Print input shape and data
        print("Model expects features:", model.n_features_in_)
        print("Provided input features shape:", input_data.shape)

        # Verify feature shape before prediction
        expected_shape = model.n_features_in_
        if input_data.shape[1] != expected_shape:
            return {"error": f"Feature shape mismatch: Expected {expected_shape}, but got {input_data.shape[1]}"}

        # Predict
        prediction = model.predict(input_data)[0]  # 0 = No Loan, 1 = Approved

        # Save prediction to MongoDB
        result = {
            "LoanID": data.LoanID,
            "approved": int(prediction)
        }
        db.predictions.insert_one(result)

        return {"approved": int(prediction)}

    except Exception as e:
        return {"error": str(e)}
    
@app.get("/get-loans")
def get_loans():
    loans = list(db.predictions.find({}, {"_id": 0}))
    for loan in loans:
        # Add extra fields for frontend display (if needed)
        loan["date"] = "2025-02-20"  # Example date
        loan["amount"] = 15000  # Example amount
    return loans


# *Run Server*
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5001)
