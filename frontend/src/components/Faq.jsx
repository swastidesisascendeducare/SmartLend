import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is SmartLend?",
    answer: "SmartLend is a peer-to-peer lending platform that connects borrowers with lenders, enabling secure and transparent loan transactions.",
  },
  {
    question: "How do I apply for a loan?",
    answer: "Sign up, complete verification, and submit a loan request with details like the amount, duration, and purpose. Lenders can then review and fund your request.",
  },
  {
    question: "How does the lending process work?",
    answer: "Borrowers submit loan requests, and lenders can choose to fund them based on their preferences. Once funded, the loan is disbursed, and repayments follow the agreed schedule.",
  },
  {
    question: "Is my investment safe as a lender?",
    answer: "While all loans come with some risk, SmartLend provides legally binding agreements and transparent borrower details to help lenders make informed decisions.",
  },
  {
    question: "Are there any fees for using SmartLend?",
    answer: "Registration is free. A small processing fee applies to certain transactions, such as loan disbursements and repayments.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-backgroundLight py-20">
      <div className="container mx-auto text-center px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-textPrimary"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-subtext mt-4 max-w-3xl mx-auto"
        >
          Get quick answers to common questions about SmartLend.
        </motion.p>

        {/* FAQ List */}
        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-5 border-2 rounded-lg cursor-pointer shadow-md transition-all duration-300 ${
                openIndex === index ? "border-primary bg-white" : "border-gray-300 bg-white"
              }`}
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleFAQ(index)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-textPrimary">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-primary" />
                )}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-subtext mt-3"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
