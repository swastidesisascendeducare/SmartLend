import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="flex">
            <Sidebar sections={[
                "Information We Collect",
                "How We Collect Information",
                "How We Use Your Information",
                "Information Sharing and Disclosure",
                "Data Retention",
                "Your Rights and Choices",
                "Security",
                "Children's Privacy",
                "Changes to This Privacy Policy",
                "International Data Transfers",
                "Contact Us"
            ]} />

            <div className="flex-1 p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <p className="text-gray-700 mb-4">Last Updated: March 05, 2025</p>

                <p className="text-gray-700 mb-4">
                    SmartLend Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our peer-to-peer lending platform and related services (collectively, the "Services").
                </p>

                <section id="Information We Collect" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
                    <h3 className="text-xl font-semibold mb-2">1.1 Personal Information</h3>
                    <p className="text-gray-700">We collect information that identifies, relates to, describes, or could reasonably be linked to you, including:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Contact information (e.g., name, email address, phone number, postal address)</li>
                        <li>Financial information (e.g., bank account details, credit history)</li>
                        <li>Identification information (e.g., government-issued ID numbers)</li>
                        <li>Employment information</li>
                        <li>Device and usage information</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2 mt-4">1.2 Non-Personal Information</h3>
                    <p className="text-gray-700">We also collect non-personal information that does not directly identify you, such as browser type, IP address, and interaction with our Services.</p>
                </section>

                <section id="How We Collect Information" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">2. How We Collect Information</h2>
                    <p className="text-gray-700">We collect information:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Directly from you when you provide it</li>
                        <li>Automatically through your use of our Services</li>
                        <li>From third-party sources (e.g., credit bureaus, identity verification services)</li>
                    </ul>
                </section>

                <section id="How We Use Your Information" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                    <p className="text-gray-700">We use your information to:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Provide, maintain, and improve our Services</li>
                        <li>Process transactions and send related communications</li>
                        <li>Verify your identity and prevent fraud</li>
                        <li>Personalize your experience</li>
                        <li>Comply with legal obligations</li>
                        <li>Analyze usage patterns and trends</li>
                    </ul>
                </section>

                <section id="Information Sharing and Disclosure" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">4. Information Sharing and Disclosure</h2>
                    <p className="text-gray-700">We may share your information:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>With other users as necessary for loan transactions</li>
                        <li>With service providers who assist in our operations</li>
                        <li>With legal and regulatory authorities when required</li>
                        <li>In connection with a business transfer or merger</li>
                        <li>With your consent or at your direction</li>
                    </ul>
                </section>

                <section id="Data Retention" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">5. Data Retention</h2>
                    <p className="text-gray-700">We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>
                </section>

                <section id="Your Rights and Choices" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">6. Your Rights and Choices</h2>
                    <p className="text-gray-700">Depending on your location, you may have the right to:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Delete your information</li>
                        <li>Object to or restrict certain processing</li>
                        <li>Data portability</li>
                    </ul>
                    <p className="text-gray-700 mt-2">To exercise these rights, please contact us using the information provided in Section 11.</p>
                </section>

                <section id="Security" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">7. Security</h2>
                    <p className="text-gray-700">We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
                </section>

                <section id="Children's Privacy" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">8. Children's Privacy</h2>
                    <p className="text-gray-700">Our Services are not intended for children under 18. We do not knowingly collect personal information from children under 18.</p>
                </section>

                <section id="Changes to This Privacy Policy" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">9. Changes to This Privacy Policy</h2>
                    <p className="text-gray-700">We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date.</p>
                </section>

                <section id="International Data Transfers" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">10. International Data Transfers</h2>
                    <p className="text-gray-700">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
                </section>

                <section id="Contact Us" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
                    <p className="text-gray-700">If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p className="text-gray-700">
                        SmartLend Ltd<br />
                        56 Cae Bracla, Brackla, Bridgend CF31 2HE<br />
                        Email: privacy@smartlend.uk<br />
                        Phone: [Insert Phone Number]
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

export default PrivacyPolicy;
