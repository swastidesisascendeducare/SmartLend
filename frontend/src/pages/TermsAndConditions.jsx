const TermsAndConditions = () => {
    return (
        <div className="flex">
            <Sidebar sections={[
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
                "Contact Information"
            ]} />

            <div className="flex-1 p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

                <p className="text-gray-700 mb-4">Last Updated: March 05, 2025</p>

                <section id="Introduction" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                    <p className="text-gray-700">Welcome to SmartLend ("the Platform"). These Terms and Conditions ("Terms") govern your use of the SmartLend platform and services. By accessing or using SmartLend, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Platform.</p>
                </section>

                <section id="Definitions" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">2. Definitions</h2>
                    <p className="text-gray-700">
                        "User" refers to any individual or entity using the Platform.<br/>
                        "Borrower" means a User who applies for or receives a loan through the Platform.<br/>
                        "Lender" means a User who offers or provides loans through the Platform.<br/>
                        "Loan Agreement" refers to the contract between a Borrower and a Lender facilitated through the Platform.
                    </p>
                </section>

                <section id="User Eligibility and Account" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">3. User Eligibility and Account</h2>
                    <p className="text-gray-700">
                        3.1. Users must be at least 18 years old and have the legal capacity to enter into binding contracts.<br/>
                        3.2. Users are required to create an account with accurate, complete, and up-to-date information.<br/>
                        3.3. Users are responsible for maintaining the confidentiality of their account credentials.<br/>
                        3.4. SmartLend reserves the right to refuse service, terminate accounts, or cancel transactions at its sole discretion.
                    </p>
                </section>

                <section id="Platform Services" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">4. Platform Services</h2>
                    <p className="text-gray-700">
                        4.1. SmartLend facilitates peer-to-peer lending by connecting Borrowers and Lenders.<br/>
                        4.2. The Platform does not provide financial advice, guarantees, or participate in loan transactions.<br/>
                        4.3. SmartLend may use third-party service providers to support Platform operations.
                    </p>
                </section>

                <section id="User Responsibilities" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">5. User Responsibilities</h2>
                    <p className="text-gray-700">
                        5.1. Users must provide accurate information and keep it updated.<br/>
                        5.2. Users agree to comply with all applicable laws and regulations.<br/>
                        5.3. Users are responsible for conducting due diligence before entering into any loan transactions.<br/>
                        5.4. Fraudulent activity, misrepresentation, or violation of these Terms will result in immediate account suspension and potential legal action.
                    </p>
                </section>

                <section id="Privacy and Data Protection" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">6. Privacy and Data Protection</h2>
                    <p className="text-gray-700">
                        6.1. SmartLend collects and processes personal data in accordance with its Privacy Policy.<br/>
                        6.2. Users consent to the collection, storage, and processing of their personal data for Platform functionality.<br/>
                        6.3. SmartLend implements reasonable security measures to protect user data but cannot guarantee absolute security.
                    </p>
                </section>

                <section id="Intellectual Property" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property</h2>
                    <p className="text-gray-700">
                        7.1. All content and materials on the Platform are the property of SmartLend or its licensors.<br/>
                        7.2. Users may not reproduce, distribute, or create derivative works without explicit permission.<br/>
                        7.3. Users grant SmartLend a non-exclusive license to use any content they submit to the Platform.
                    </p>
                </section>

                <section id="Loan Terms and Conditions" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">8. Loan Terms and Conditions</h2>
                    <p className="text-gray-700">
                        8.1. Loan terms, including interest rates and repayment schedules, are set by agreement between Borrowers and Lenders.<br/>
                        8.2. SmartLend does not guarantee loan approval or set loan terms.<br/>
                        8.3. Users are bound by the terms of their Loan Agreements.<br/>
                        8.4. Late payments may result in penalties as defined in the Loan Agreement.
                    </p>
                </section>

                <section id="Fees and Charges" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">9. Fees and Charges</h2>
                    <p className="text-gray-700">
                        9.1. SmartLend may charge fees for its services, which will be clearly disclosed to Users.<br/>
                        9.2. Users are responsible for any taxes or duties associated with their use of the Platform.
                    </p>
                </section>

                <section id="Disclaimers and Limitation of Liability" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">10. Disclaimers and Limitation of Liability</h2>
                    <p className="text-gray-700">
                        10.1. The Platform is provided "as is" without any warranties, express or implied.<br/>
                        10.2. SmartLend is not responsible for the actions, content, information, or data of third parties.<br/>
                        10.3. SmartLend shall not be liable for any indirect, incidental, special, consequential, or punitive damages.<br/>
                        10.4. SmartLend's total liability for any claim arising from or relating to these Terms is limited to the amount paid by the User to SmartLend in the past 12 months.
                    </p>
                </section>

                <section id="Indemnification" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">11. Indemnification</h2>
                    <p className="text-gray-700">
                        Users agree to indemnify, defend, and hold harmless SmartLend and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with their use of the Platform or violation of these Terms.
                    </p>
                </section>

                <section id="Dispute Resolution" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">12. Dispute Resolution</h2>
                    <p className="text-gray-700">
                        12.1. Any disputes arising from these Terms or use of the Platform shall be resolved through binding arbitration.<br/>
                        12.2. The arbitration shall be conducted in [Jurisdiction] in accordance with the rules of [Arbitration Association].<br/>
                        12.3. Users waive their right to participate in a class action lawsuit against SmartLend.
                    </p>
                </section>

                <section id="Termination" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">13. Termination</h2>
                    <p className="text-gray-700">
                        13.1. SmartLend may terminate or suspend access to the Platform immediately, without prior notice or liability, for any reason.<br/>
                        13.2. Users may terminate their account at any time by contacting SmartLend.<br/>
                        13.3. All provisions of the Terms which by their nature should survive termination shall survive.
                    </p>
                </section>

                <section id="Governing Law" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">14. Governing Law</h2>
                    <p className="text-gray-700">
                        These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
                    </p>
                </section>

                <section id="Amendments" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">15. Amendments</h2>
                    <p className="text-gray-700">
                        SmartLend reserves the right to modify or replace these Terms at any time. Users will be notified of any changes by posting the new Terms on the Platform. Continued use of the Platform after any such changes constitutes acceptance of the new Terms.
                    </p>
                </section>

                <section id="Severability" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">16. Severability</h2>
                    <p className="text-gray-700">
                        If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
                    </p>
                </section>

                <section id="Contact Information" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">17. Contact Information</h2>
                    <p className="text-gray-700">
                        For any questions about these Terms, please contact us at:<br/>
                        SmartLend<br/>
                        [Address]<br/>
                        Email: legal@smartlend.com<br/>
                        Phone: [Phone Number]
                    </p>
                </section>
            </div>
        </div>
    );
};

const Sidebar = ({ sections }) => {
    return (
        <div className="w-64 h-screen p-6 bg-gray-100 fixed left-0 top-0 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <ul>
                {sections.map((section) => (
                    <li key={section} className="mb-2">
                        <a href={`#${section}`} className="text-blue-600 hover:underline">
                            {section}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TermsAndConditions;

