import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="bg-backgroundLight text-center py-24 relative overflow-hidden">
//       {/* Background Glow Effects */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-30 backdrop-blur-md rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-darkBlue opacity-30 backdrop-blur-md rounded-full"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-extrabold text-textPrimary leading-tight"
//         >
//           SmartLend: <span className="text-primary">AI-Powered</span> Peer-to-Peer Lending
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-lg text-subtext mt-6 max-w-3xl mx-auto"
//         >
//           A seamless lending experience where borrowers and lenders connect directly.  
//           AI-driven risk assessment, transparent agreements, and secure transactions.
//         </motion.p>

//         {/* Key Features */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
//         >
//           {[
//             { title: "🔹 Borrow with Ease", desc: "Check eligibility, apply for loans, and track repayments effortlessly." },
//             { title: "💰 Secure Investments", desc: "Browse and fund loans, diversify portfolios, and monitor repayments." },
//             { title: "🤖 AI-Powered Decisions", desc: "Risk assessment and automated agreement drafting using AI." },
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg p-6 rounded-2xl transform transition hover:scale-105 border border-gray-200"
//               role="region"
//               aria-labelledby={`feature-${index}`}
//             >
//               <h3 id={`feature-${index}`} className="text-xl font-semibold text-textPrimary">
//                 {feature.title}
//               </h3>
//               <p className="text-subtext mt-2">{feature.desc}</p>
//             </div>
//           ))}
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 0.8 }}
//           className="mt-10 flex justify-center space-x-6"
//         >
//           <Link
//             to="/signuppage?type=borrower"
//             className="bg-darkBlue hover:bg-hoverEffect text-white px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
//             aria-label="Get a Loan"
//           >
//             Get a Loan
//           </Link>
//           <Link
//             to="/signuppage?type=lender"
//             className="bg-primary hover:bg-hoverEffect text-white px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
//             aria-label="Invest Now"
//           >
//             Invest Now
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section className="bg-backgroundLight text-center py-24 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-30 backdrop-blur-md rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-darkBlue opacity-30 backdrop-blur-md rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-textPrimary leading-tight"
        >
          SmartLend: <span className="text-primary">Seamless</span> Peer-to-Peer Lending
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-subtext mt-6 max-w-3xl mx-auto"
        >
          Connect directly with trusted lenders and borrowers.  
          Enjoy transparent loan agreements, flexible funding, and secure transactions.
        </motion.p>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            { title: "🔹 Easy Borrowing", desc: "Check eligibility, apply for loans, and manage repayments with ease." },
            { title: "💰 Smart Investing", desc: "Browse loan opportunities, fund borrowers, and track your investments." },
            { title: "📜 Automated Agreements", desc: "Generate clear and legally structured loan agreements instantly." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-2xl transform transition hover:scale-105 border border-gray-200"
              role="region"
              aria-labelledby={`feature-${index}`}
            >
              <h3 id={`feature-${index}`} className="text-xl font-semibold text-textPrimary">
                {feature.title}
              </h3>
              <p className="text-subtext mt-2">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex justify-center space-x-6"
        >
          <Link
            to="/signuppage?type=borrower"
            className="bg-darkBlue hover:bg-hoverEffect text-white px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
            aria-label="Get a Loan"
          >
            Get a Loan
          </Link>
          <Link
            to="/signuppage?type=lender"
            className="bg-primary hover:bg-hoverEffect text-white px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105"
            aria-label="Invest Now"
          >
            Invest Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;