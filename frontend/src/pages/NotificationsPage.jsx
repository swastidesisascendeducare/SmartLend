import React, { useState } from "react";

const notificationsData = {
  borrower: {
    loanUpdates: [
      { id: 1, message: "Loan application approved", date: "2025-03-04" },
      { id: 2, message: "Loan disbursed successfully", date: "2025-03-03" },
    ],
    repaymentReminders: [
      { id: 1, message: "Repayment due on 2025-03-15", date: "2025-03-10" },
      { id: 2, message: "Repayment overdue", date: "2025-03-16" },
    ],
  },
  lender: {
    loanUpdates: [
      { id: 1, message: "New investment opportunity available", date: "2025-03-05" },
      { id: 2, message: "Borrower accepted loan terms", date: "2025-03-04" },
    ],
    repaymentReminders: [
      { id: 1, message: "Interest payout due soon", date: "2025-03-12" },
    ],
  },
  messages: [
    { id: 1, message: "New message from lender", date: "2025-03-04" },
    { id: 2, message: "Message from borrower", date: "2025-03-03" },
  ],
};

export default function NotificationsPage({ userType }) {
  const [activeTab, setActiveTab] = useState("loanUpdates");
  const userNotifications = notificationsData[userType] || {};

  return (
    <div className="flex justify-center p-4 bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Notifications</h2>
        <div className="flex justify-center mb-4">
          <button
            className={`p-2 rounded ${activeTab === "loanUpdates" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
            onClick={() => setActiveTab("loanUpdates")}
          >
            Loan Updates
          </button>
          <button
            className={`p-2 rounded mx-2 ${activeTab === "repaymentReminders" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
            onClick={() => setActiveTab("repaymentReminders")}
          >
            Repayment Reminders
          </button>
          <button
            className={`p-2 rounded ${activeTab === "messages" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </button>
        </div>

        {activeTab !== "messages" && userNotifications[activeTab] ? (
          <div>
            <h3 className="text-lg font-bold text-center mb-2">{activeTab.replace(/([A-Z])/g, ' $1')}</h3>
            <ul className="list-none">
              {userNotifications[activeTab].map((notification) => (
                <li key={notification.id} className="p-3 border border-gray-200 mb-2 rounded">
                  <div className="flex justify-between">
                    <span className="font-bold">{notification.message}</span>
                    <span className="text-gray-600">{notification.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : activeTab === "messages" ? (
          <div>
            <h3 className="text-lg font-bold text-center mb-2">Messages</h3>
            <ul className="list-none">
              {notificationsData.messages.map((notification) => (
                <li key={notification.id} className="p-3 border border-gray-200 mb-2 rounded">
                  <div className="flex justify-between">
                    <span className="font-bold">{notification.message}</span>
                    <span className="text-gray-600">{notification.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center">No notifications available.</p>
        )}
      </div>
    </div>
  );
}
