import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-lg mt-2">Last Updated: March 05, 2025</p>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar Navigation */}
        <Sidebar
          sections={[
            "Information We Collect",
            "How We Collect Information",
            "How We Use Your Information",
            "Information Sharing and Disclosure",
            "Data Retention",
            "Your Rights and Choices",
            "Security",
            "Children's Privacy",
            "Changes to This Privacy Policy",
            "Contact Us",
          ]}
        />

        {/* Content Section */}
        <main className="flex-1 max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
          {sections.map((section, index) => (
            <Section key={section.id} {...section} />
          ))}
        </main>
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
        <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
      ))}
    </section>
  );
};

// Section Data
const sections = [
  {
    id: "Information We Collect",
    title: "1. Information We Collect",
    content: [
      "We collect personal information that identifies, relates to, describes, or could reasonably be linked to you. This includes your name, email address, phone number, postal address, financial details such as bank account information and credit history, government-issued identification numbers, employment details, and device usage information.",
      "Additionally, we collect non-personal information that does not directly identify you. This includes data such as browser type, IP address, and interaction with our Services."
    ]
  },
  {
    id: "How We Collect Information",
    title: "2. How We Collect Information",
    content: [
      "We collect information directly from you when you provide it, such as during account registration or loan application. Additionally, we automatically collect information through your interaction with our Services, including your browsing behavior and transaction history. We may also receive information from third-party sources, such as credit bureaus and identity verification services."
    ]
  },
  {
    id: "How We Use Your Information",
    title: "3. How We Use Your Information",
    content: [
      "We use your information to provide, maintain, and improve our Services. This includes processing transactions, sending relevant communications, verifying your identity, preventing fraud, and ensuring compliance with legal and regulatory requirements.",
      "Additionally, we may use your information to personalize your experience, analyze usage patterns, and enhance our platform's functionality."
    ]
  },
  {
    id: "Information Sharing and Disclosure",
    title: "4. Information Sharing and Disclosure",
    content: [
      "We may share your information with other users as necessary for loan transactions. Additionally, we may share your data with service providers who assist in our operations, such as payment processors and identity verification services.",
      "We may also disclose your information when required by law or in connection with business transfers or mergers."
    ]
  },
  {
    id: "Data Retention",
    title: "5. Data Retention",
    content: [
      "We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy. In some cases, we may retain data for longer periods if required by law or to resolve disputes."
    ]
  },
  {
    id: "Your Rights and Choices",
    title: "6. Your Rights and Choices",
    content: [
      "Depending on your location, you may have the right to access, correct, or delete your personal information.",
      "You may also have the right to object to certain processing activities and request data portability."
    ]
  },
  {
    id: "Security",
    title: "7. Security",
    content: [
      "We implement appropriate technical measures to protect your information.",
      "However, no method of transmission over the Internet is completely secure."
    ]
  },
  {
    id: "Children's Privacy",
    title: "8. Children's Privacy",
    content: [
      "Our Services are not intended for children under the age of 18.",
      "If we become aware that we have collected such data from children under 18 years old without parental consent, we will delete it promptly."
    ]
  },
  {
    id: "Changes to This Privacy Policy",
    title: "9. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy periodically.",
      "Any changes will be reflected by an updated 'Last Updated' date at the beginning of this document."
    ]
  },
  {
    id: "Contact Us",
    title: "10. Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or wish to exercise your rights under applicable law.",
      `Contact us at `,
      <a href="mailto:smartlend25@gmail.com" className="text-blue-600 hover:underline">
        smartlend25@gmail.com
      </a>,
    ],
  }  
];

export default PrivacyPolicy;
