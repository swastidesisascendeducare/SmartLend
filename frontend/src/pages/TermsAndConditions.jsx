import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="text-lg mt-2">Last Updated: March 15, 2025</p>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar Navigation */}
        <Sidebar
          sections={[
            "Introduction",
            "Definitions",
            "User Eligibility and Account",
            "Platform Services",
            "User Responsibilities",
            "Privacy and Data Protection",
            "Intellectual Property",
            "Loan Terms and Conditions",
            "Fees and Charges",
            "Disclaimers and Limitation of Liability",
            "Indemnification",
            "Dispute Resolution",
            "Termination",
            "Governing Law",
            "Amendments",
            "Severability",
            "Contact Information",
          ]}
        />

        {/* Content Section */}
        <div className="flex-1 p-8">
          {sections.map((section, index) => (
            <Section key={section.id} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ sections }) => {
  return (
    <aside className="w-64 bg-gray-100 p-6 hidden lg:block sticky top-20 h-fit">
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Section = ({ id, title, content }) => {
  return (
    <section id={id} className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index} className="text-gray-700 mb-4">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

// Section Data
const sections = [
  {
    id: "Introduction",
    title: "1. Introduction",
    content: [
      `Welcome to SmartLend ("the Platform"). These Terms and Conditions ("Terms") govern your use of the SmartLend platform and services. By accessing or using SmartLend, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Platform.`,
    ],
  },
  {
    id: "Definitions",
    title: "2. Definitions",
    content: [
      `"User" refers to any individual or entity using the Platform.`,
      `"Borrower" means a User who applies for or receives a loan through the Platform.`,
      `"Lender" means a User who offers or provides loans through the Platform.`,
      `"Loan Agreement" refers to the contract between a Borrower and a Lender facilitated through the Platform.`,
    ],
  },
  {
    id: "User Eligibility and Account",
    title: "3. User Eligibility and Account",
    content: [
      `3.1. Users must be at least 18 years old and have the legal capacity to enter into binding contracts.`,
      `3.2. Users are required to create an account with accurate, complete, and up-to-date information.`,
      `3.3. Users are responsible for maintaining the confidentiality of their account credentials.`,
      `3.4. SmartLend reserves the right to refuse service, terminate accounts, or cancel transactions at its sole discretion.`,
    ],
  },
  {
    id: "Platform Services",
    title: "4. Platform Services",
    content: [
      `4.1. SmartLend facilitates peer-to-peer lending by connecting Borrowers and Lenders.`,
      `4.2. The Platform does not provide financial advice, guarantees, or participate in loan transactions.`,
      `4.3. SmartLend may use third-party service providers to support Platform operations.`,
    ],
  },
  {
    id: "User Responsibilities",
    title: "5. User Responsibilities",
    content: [
      `5.1. Users must provide accurate information and keep it updated.`,
      `5.2. Users agree to comply with all applicable laws and regulations.`,
      `5.3. Users are responsible for conducting due diligence before entering into any loan transactions.`,
      `5.4. Fraudulent activity, misrepresentation, or violation of these Terms will result in immediate account suspension and potential legal action.`,
    ],
  },
  {
    id: "Privacy and Data Protection",
    title: "6. Privacy and Data Protection",
    content: [
      `6.1. SmartLend collects and processes personal data in accordance with its Privacy Policy.`,
      `6.2. Users consent to the collection, storage, and processing of their personal data for Platform functionality.`,
      `6.3. SmartLend implements reasonable security measures to protect user data but cannot guarantee absolute security.`,
    ],
  },
  {
    id: "Intellectual Property",
    title: "7. Intellectual Property",
    content: [
      `7.1. All content on the Platform, including text, images, and software, is owned by SmartLend or its licensors.`,
      `7.2. Users may not reproduce, distribute, or display any content without prior written consent from SmartLend.`,
    ],
  },
  {
    id: "Loan Terms and Conditions",
    title: "8. Loan Terms and Conditions",
    content: [
      `8.1. Loan Agreements are contracts between Borrowers and Lenders and are governed by these Terms.`,
      `8.2. SmartLend does not guarantee loan repayment or interest rates.`,
    ],
  },
  {
    id: "Fees and Charges",
    title: "9. Fees and Charges",
    content: [
      `9.1. SmartLend may charge fees for Platform services.`,
      `9.2. Fees are disclosed on the Platform and are subject to change.`,
    ],
  },
  {
    id: "Disclaimers and Limitation of Liability",
    title: "10. Disclaimers and Limitation of Liability",
    content: [
      `10.1. The Platform is provided "as is" without warranties of any kind.`,
      `10.2. SmartLend is not liable for damages arising from use of the Platform.`,
    ],
  },
  {
    id: "Indemnification",
    title: "11. Indemnification",
    content: [
      `11.1. Users agree to indemnify SmartLend against claims arising from their use of the Platform.`,
    ],
  },
  {
    id: "Dispute Resolution",
    title: "12. Dispute Resolution",
    content: [
      `12.1. Disputes will be resolved through arbitration in accordance with applicable laws.`,
    ],
  },
  {
    id: "Termination",
    title: "13. Termination",
    content: [
      `13.1. SmartLend may terminate these Terms or access to the Platform at any time.`,
    ],
  },
  {
    id: "Governing Law",
    title: "14. Governing Law",
    content: [
      `14.1. These Terms are governed by and construed in accordance with the laws of [State/Country].`,
    ],
  },
  {
    id: "Amendments",
    title: "15. Amendments",
    content: [
      `15.1. SmartLend reserves the right to modify these Terms at any time.`,
    ],
  },
  {
    id: "Severability",
    title: "16. Severability",
    content: [
      `16.1. If any provision of these Terms is deemed invalid, the remaining provisions remain in effect.`,
    ],
  },
  {
    id: "Contact Information",
    title: "17. Contact Information",
    content: [
      "For questions or concerns, please contact us at ",
      <a href="mailto:smartlend25@gmail.com" className="text-blue-600 hover:underline">
        smartlend25@gmail.com
      </a>,
      "."
    ],
  }
];

export default TermsAndConditions;
