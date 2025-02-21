import React from "react";
import { FaUserCheck, FaHandHoldingUsd, FaFileSignature, FaMoneyBillWave, FaChartLine, FaCoins } from "react-icons/fa";
import { motion } from "framer-motion";

const borrowerSteps = [
  {
    icon: <FaUserCheck className="text-5xl text-primary" />,
    title: "Step 1: Sign Up & Verify",
    description: "Create your SmartLend account and complete verification to ensure secure transactions.",
  },
  {
    icon: <FaHandHoldingUsd className="text-5xl text-primary" />,
    title: "Step 2: Apply for a Loan",
    description: "Submit a loan request with necessary details, including amount and duration.",
  },
  {
    icon: <FaFileSignature className="text-5xl text-primary" />,
    title: "Step 3: Smart Agreement",
    description: "AI generates a legally sound loan agreement for both borrowers and lenders.",
  },
  {
    icon: <FaMoneyBillWave className="text-5xl text-primary" />,
    title: "Step 4: Receive & Repay",
    description: "Once funded, receive the loan and repay according to the agreed schedule.",
  },
];

const lenderSteps = [
  {
    icon: <FaUserCheck className="text-5xl text-primary" />,
    title: "Step 1: Sign Up & Explore",
    description: "Register and browse loan requests from verified borrowers.",
  },
  {
    icon: <FaChartLine className="text-5xl text-primary" />,
    title: "Step 2: Assess Loan Requests",
    description: "Check borrower details, loan terms, and risk insights before investing.",
  },
  {
    icon: <FaFileSignature className="text-5xl text-primary" />,
    title: "Step 3: Invest & Secure Agreement",
    description: "Fund loans and get an AI-generated agreement for security.",
  },
  {
    icon: <FaCoins className="text-5xl text-primary" />,
    title: "Step 4: Earn Returns",
    description: "Receive repayments with interest and track your investments.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-backgroundLight py-20">
      <div className="container mx-auto text-center px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-textPrimary"
        >
          How <span className="text-primary">SmartLend</span> Works
        </motion.h2>

        {/* Borrower Steps */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-3xl font-bold text-textPrimary mb-6">For Borrowers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {borrowerSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center text-center"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-2xl font-semibold text-textPrimary">{step.title}</h3>
                <p className="text-subtext mt-3">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lender Steps */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-textPrimary mb-6">For Lenders</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {lenderSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-xl shadow-lg flex flex-col items-center text-center"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-2xl font-semibold text-textPrimary">{step.title}</h3>
                <p className="text-subtext mt-3">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
