import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-backgroundLight text-center py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-darkBlue opacity-20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-textPrimary leading-tight"
        >
          SmartLend: <span className="text-primary">AI-Powered</span> Peer-to-Peer Lending
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-subtext mt-6 max-w-3xl mx-auto"
        >
          A seamless lending experience where borrowers and lenders connect directly.  
          AI-driven risk assessment, transparent agreements, and secure transactions.
        </motion.p>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="bg-white shadow-lg p-6 rounded-2xl transform transition hover:scale-105">
            <h3 className="text-xl font-semibold text-textPrimary">🔹 Borrow with Ease</h3>
            <p className="text-subtext mt-2">Check eligibility, apply for loans, and track repayments effortlessly.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl transform transition hover:scale-105">
            <h3 className="text-xl font-semibold text-textPrimary">💰 Secure Investments</h3>
            <p className="text-subtext mt-2">Browse and fund loans, diversify portfolios, and monitor repayments.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl transform transition hover:scale-105">
            <h3 className="text-xl font-semibold text-textPrimary">🤖 AI-Powered Decisions</h3>
            <p className="text-subtext mt-2">Risk assessment and automated agreement drafting using AI.</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex justify-center space-x-6"
        >
          <Link to="/signuppage?type=borrower">
            <button className="bg-darkBlue hover:bg-hoverEffect text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105">
              Get a Loan
            </button>
          </Link>
          <Link to="/signuppage?type=lender">
            <button className="bg-primary hover:bg-hoverEffect text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105">
              Invest Now
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
