import React from "react";
import { FaRegLightbulb, FaFileContract, FaShieldAlt, FaUsers, FaHandHoldingUsd, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

// const features = [
//   {
//     icon: <FaRegLightbulb className="text-5xl text-primary" />,
//     title: "AI-Powered Loan Matching",
//     description: "Instantly connect with the right lender using our smart AI system, ensuring quick approvals.",
//   },
//   {
//     icon: <FaFileContract className="text-5xl text-primary" />,
//     title: "Smart Legal Agreements",
//     description: "Auto-generated, legally sound contracts provide secure and hassle-free lending.",
//   },
//   {
//     icon: <FaShieldAlt className="text-5xl text-primary" />,
//     title: "Secure & Transparent",
//     description: "Track loans and repayments with complete clarity, ensuring full trust in transactions.",
//   },
//   {
//     icon: <FaUsers className="text-5xl text-primary" />,
//     title: "Peer-to-Peer Community",
//     description: "Connect directly with borrowers and lenders, removing intermediaries and extra fees.",
//   },
//   {
//     icon: <FaHandHoldingUsd className="text-5xl text-primary" />,
//     title: "Flexible Funding Options",
//     description: "Multiple lenders can contribute to a single loan, making financing easier and more accessible.",
//   },
//   {
//     icon: <FaChartLine className="text-5xl text-primary" />,
//     title: "Real-Time Insights",
//     description: "Monitor loan performance, repayment schedules, and funding progress in real time.",
//   },
// ];

// const About = () => {
//   return (
//     <section id="about" className="bg-white py-20">
//       <div className="container mx-auto text-center px-6">
//         {/* Section Header */}
//         <motion.h2 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.8 }} 
//           className="text-5xl font-extrabold text-textPrimary"
//         >
//           Why Choose <span className="text-primary">SmartLend?</span>
//         </motion.h2>
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ delay: 0.3, duration: 0.8 }} 
//           className="text-lg text-subtext mt-4 max-w-3xl mx-auto"
//         >
//           Lending made smarter, faster, and safer with AI-driven evaluations, transparent agreements, and secure transactions.
//         </motion.p>

//         {/* Features Grid */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ delay: 0.5, duration: 0.8 }} 
//           className="mt-12 grid md:grid-cols-3 gap-8"
//         >
//           {features.map((feature, index) => (
//             <motion.div 
//               key={index} 
//               whileHover={{ scale: 1.05 }} 
//               className="p-8 bg-accentHighlight rounded-xl shadow-lg flex flex-col items-center text-center"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-2xl font-semibold text-textPrimary">{feature.title}</h3>
//               <p className="text-subtext mt-3">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

const features = [
  {
    icon: <FaRegLightbulb className="text-5xl text-primary" />,
    title: "Effortless Loan Requests",
    description: "Borrowers can submit loan requests, and lenders review them based on their preferences.",
  },
  {
    icon: <FaFileContract className="text-5xl text-primary" />,
    title: "Smart Legal Agreements",
    description: "Auto-generated, legally structured contracts provide secure and transparent lending terms.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-primary" />,
    title: "Secure & Transparent",
    description: "Track funding, repayments, and loan progress with complete visibility and trust.",
  },
  {
    icon: <FaUsers className="text-5xl text-primary" />,
    title: "Seamless P2P Lending",
    description: "Borrowers request loans, and multiple lenders can contribute—eliminating intermediaries.",
  },
  {
    icon: <FaHandHoldingUsd className="text-5xl text-primary" />,
    title: "Flexible Funding Options",
    description: "Loans can be funded by multiple lenders, making financing more accessible and fair.",
  },
  {
    icon: <FaChartLine className="text-5xl text-primary" />,
    title: "Real-Time Loan Tracking",
    description: "Monitor funding status, repayment schedules, and lender contributions with ease.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto text-center px-6">
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-5xl font-extrabold text-textPrimary"
        >
          Why Choose <span className="text-primary">SmartLend?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }} 
          className="text-lg text-subtext mt-4 max-w-3xl mx-auto"
        >
          Lending made simple, secure, and accessible. Request loans, connect with lenders, and track everything in one place.
        </motion.p>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }} 
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="p-8 bg-accentHighlight rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-textPrimary">{feature.title}</h3>
              <p className="text-subtext mt-3">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
