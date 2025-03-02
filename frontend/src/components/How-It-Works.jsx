import React from "react";
import { FaUserCheck, FaHandHoldingUsd, FaFileSignature, FaMoneyBillWave, FaChartLine, FaCoins } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = {
  borrowers: [
    { icon: <FaUserCheck />, title: "Sign Up & Verify", description: "Create your SmartLend account and complete verification to ensure secure transactions." },
    { icon: <FaHandHoldingUsd />, title: "Apply for a Loan", description: "Submit a loan request with necessary details, including amount and duration." },
    { icon: <FaFileSignature />, title: "Smart Agreement", description: "AI generates a legally sound loan agreement for both borrowers and lenders." },
    { icon: <FaMoneyBillWave />, title: "Receive & Repay", description: "Once funded, receive the loan and repay according to the agreed schedule." },
  ],
  lenders: [
    { icon: <FaUserCheck />, title: "Sign Up & Explore", description: "Register and browse loan requests from verified borrowers." },
    { icon: <FaChartLine />, title: "Assess Loan Requests", description: "Check borrower details, loan terms, and risk insights before investing." },
    { icon: <FaFileSignature />, title: "Invest & Secure Agreement", description: "Fund loans and get an AI-generated agreement for security." },
    { icon: <FaCoins />, title: "Earn Returns", description: "Receive repayments with interest and track your investments." },
  ],
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-backgroundLight py-20">
      <div className="container mx-auto text-center px-6">
        
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-textPrimary"
        >
          How <span className="text-primary">SmartLend</span> Works
        </motion.h2>

        {["borrowers", "lenders"].map((role, idx) => (
          <motion.div
            key={role}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.5 + 0.3, duration: 1 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-textPrimary mb-6">
              For {role === "borrowers" ? "Borrowers" : "Lenders"}
            </h3>
            
            <div className="grid md:grid-cols-4 gap-12">
              {steps[role].map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="p-8 bg-white rounded-xl shadow-xl flex flex-col items-center text-center transition duration-300 transform hover:shadow-2xl"
                >
                  <div className="text-5xl text-primary mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-semibold text-textPrimary">{step.title}</h3>
                  <p className="text-subtext mt-3 max-w-lg mx-auto">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
