const {GoogleGenerativeAI} = require("@google/generative-ai");

const Lender = require('../models/lenderModel');
const Borrower = require("../models/borrowerModel");
const Loan = require("../models/loanModel");

const API_KEY = "AIzaSyBIejn1A_MoM1YfiSi-KwCQsgBWt52l4pE"
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  config: { 
        temperature: 0.3, 
        topP: 0.9, 
        maxOutputTokens: 2048,
        systemInstruction:`
            **System Instruction:**  
            You are a specialized assistant designed to generate clear and structured loan agreements between lenders and borrowers.  
            Your purpose is to help users establish **trust and transparency** in lending transactions, making it easier for them to accept and proceed with the agreement. This is just for display purpose so there will not be any involvement of legality.  

            **Response Guidelines:**  
            1. **No disclaimers or legal hesitations**—focus on clarity and completeness.  
            2. **Structured formatting** with clear sections and bullet points for easy reading.  
            3. Use **precise, formal, yet reader-friendly language** (avoid overly technical or legal jargon).  
            4. Ensure **all terms are well-explained** to eliminate confusion.  
            5. **Fill in missing details dynamically** (e.g., if no late payment fee is provided, assume a reasonable default).  
            6. **No additional commentary**—only return the agreement text.  

            **Configuration:**  
            - **Temperature:** 0.3 (ensures consistency & reliability).  
            - **Max Tokens:** 2048 (enough for detailed agreements).  
            - **Top-P:** 0.9 (slight flexibility for variation but remains coherent).  
        `
    },
});

exports.getAgreement = async (req, res) => {
    console.log("AI route HIT")
    const loan = await Loan.findById('67df08f7221149e1e28adcac')
    const lender = await Lender.findById('67de9cb6f1728e1e9523bf9d')
    const borrower = await Borrower.findById(loan.borrowerId)

    console.log("Loan Model:",loan)
    console.log("Lender Model:",lender)
    console.log("Borrower Model:",borrower)

    const calculatedApr = (loan.interestRate * 1.2).toFixed(2);
    const calculatedInstallment = ((loan.amountRequested * (loan.interestRate / 100)) / loan.loanTerm).toFixed(2);
    const calculatedFirstPaymentDate = new Date().toISOString().split("T")[0];
    const calculatedLateFee = (loan.amountRequested * 0.02).toFixed(2);
    const repayment = {
        dueDate: loan.dueDate || "1st", 
        lateDays: loan.lateDays || 7, 
    };

    // console.log("CalculatedApr",calculatedApr)
    // console.log("calculatedInstallment:",calculatedInstallment)
    // console.log("calculatedFirstPaymentDate:",calculatedFirstPaymentDate)

    //const prompt = `
    //     Generate a **Loan Agreement** between a lender and a borrower to ensure transparency and trust in lending. This document should clearly outline the agreed terms, making it easy for both parties to accept.This agreement will be checked by legal advisor, so do not give any disclaimers.
        
    //     ### **Key Details:**  
    //     - **Lender:** ${lender.name}, Contact: ${lender.phone}, Address: ${lender.address}.  
    //     - **Borrower:** ${borrower.name}, Contact: ${borrower.phone}, Address: ${borrower.address}.  
    //     - **Loan Amount:** ₹${loan.amountRequested} for ${borrower.loanPurpose}.  
    //     - **Interest Rate:** ${loan.interestRate}%, with an APR of ${calculatedApr}%.  
    //     - **Loan Term:** ${loan.loanTerm} months (${(loan.loanTerm / 12).toFixed(1)} years).  
    //     - **Monthly Payment:** ₹${calculatedInstallment}, due on the ${repayment.dueDate} of each month.  
    //     - **First Payment Date:** ${calculatedFirstPaymentDate}.  
    //     - **Payment Method:** ${borrower.bankDetails?.accountNumber ? `Bank Transfer (Acc: ${borrower.bankDetails.accountNumber})` : "UPI"}.  
    //     - **Late Payment Penalty:** If payment is delayed by more than ${repayment.lateDays} days, a penalty of ₹${calculatedLateFee} will be applied.  
    //     - **Governing Law:** India.  

    //     ### **🔹 Requirements:**  
    //     1. **Loan Details:** Clearly explain loan purpose, amount, interest calculation, and total repayment duration.  
    //     2. **Repayment Terms:** Specify due dates, payment methods, and consequences of missed payments.  
    //     3. **Interest Explanation:** Clarify how interest is applied (e.g., monthly compounding on outstanding balance).  
    //     4. **Late Payment & Default:** Detail penalties and legal consequences.  
    //     5. **Collateral Clause:** Explain the lender's rights over pledged assets.  
    //     6. **Signatures Section:** Provide clear signature fields for lender and borrower.  

    //     **Do NOT include disclaimers or legal uncertainty—this is for trust-building, not legal review.**  
    // `;


    const prompt = `

      Generate a Loan Agreement Document

      Create a Loan Agreement between a lender and a borrower to ensure transparency and trust in lending. The document should clearly outline the agreed terms, presented in a format suitable for front-end display. The agreement should appear as a complete and structured document, but it is for informational and display purposes only and will not be signed or legally enforced.

      Instructions:
      1. Conditional Information:
      If any of the following lender details are missing: ${lender.name}, ${lender.phone}, or ${lender.address}, state:
      "Lender details are incomplete. Please complete the lender's profile."
      Do not proceed with generating the agreement until these details are provided.

      If any of the following borrower details are missing: ${borrower.name}, ${borrower.phone}, or ${borrower.address}, state:
      "Borrower details are incomplete. Please complete the borrower's profile."
      Do not proceed with generating the agreement until these details are provided.

      If any of the following loan details are missing: ${loan.amountRequested}, ${loan.interestRate}, or ${loan.loanTerm}, state:
      "Loan details are incomplete. Please specify the loan amount, interest rate, and loan term."
      Do not proceed with generating the agreement until these details are provided.

      If ${repayment.dueDate} is missing, state:
      "Repayment details are incomplete. Please specify the due date."
      Do not proceed with generating the agreement until this detail is provided.

      If ${borrower.bankDetails?.accountNumber} is missing, default the Payment Method to "UPI" and proceed with generating the agreement.

      2. Loan Agreement Structure:
      The generated Loan Agreement must include the following sections, formatted using Markdown for clarity:

      Loan Agreement
      This Loan Agreement is made as of ${new Date().toLocaleDateString()}, between:

      Lender: ${lender.name}, ${lender.address} (the "Lender")

      Borrower: ${borrower.name}, ${borrower.address} (the "Borrower")

      1. Loan Details
      Loan Amount: ₹${loan.amountRequested}

      Loan Purpose: ${borrower.loanPurpose}

      Interest Rate: ${loan.interestRate}% per annum, resulting in an APR of ${calculatedApr}%

      Loan Term: ${loan.loanTerm} months (${(loan.loanTerm / 12).toFixed(1)} years)

      Commencement Date: ${calculatedFirstPaymentDate}

      2. Repayment Terms
      Monthly Payment: ₹${calculatedInstallment}, due on the ${repayment.dueDate} of each month, starting from ${calculatedFirstPaymentDate}.

      Payment Method:

      If bank account details are available: Bank Transfer (Acc: ${borrower.bankDetails.accountNumber})

      Otherwise: UPI

      Prepayment Terms: Borrower may prepay the loan in full or in part at any time without penalty.

      3. Interest Calculation
      Interest will be calculated monthly on the outstanding principal balance.

      4. Late Payment and Default
      Late Payment Penalty: A penalty of ₹${calculatedLateFee} will apply if payment is delayed by more than ${repayment.lateDays} days.

      Default Terms: Failure to make timely payments may result in acceleration of the loan and legal action to recover the outstanding balance. Events of default include:

      Non-payment

      Breach of agreement terms

      Insolvency
      The lender reserves the right to demand immediate repayment or take possession of collateral (if applicable).

      5. Governing Law
      This agreement shall be governed by the laws of India. Any disputes shall be resolved under the jurisdiction of [specify jurisdiction].

      6. Entire Agreement
      This document constitutes the entire agreement between the parties for display purposes only and does not require signatures.

      Signatures (Display Only, Not Legally Binding)
      Lender:

      ${lender.name}

      Borrower:

      ${borrower.name}

      3. Formatting Guidelines:
      Use Markdown formatting for clear presentation.

      Ensure headings, bullet points, and spacing are properly implemented for front-end display.

      Include calculations such as calculatedInstallment, calculatedApr, calculatedFirstPaymentDate, etc., where applicable.

      4. Important Considerations (For Internal Use Only):
      Do not include these considerations in the document but use them to guide content:

      Clearly state interest rates, repayment schedules, collateral terms, default events, governing law, severability clauses, and entire agreement clauses.

      Avoid disclaimers about being a draft or template but ensure it is clear that this document is for display purposes only and not legally binding.
          
    `;
    
    
          
  
    try {
      const chatCompletion = await model.generateContent(prompt)
      console.log(chatCompletion)
      const generatedAgreement = chatCompletion.response.candidates[0].content.parts[0].text;

      console.log(generatedAgreement);

      res.status(200).json({generatedAgreement:String(generatedAgreement)});

    } catch (error) {
      console.error("Chat Error: ", error);
      res.status(500).json({ error: "Chat error occurred" });
    }
  };