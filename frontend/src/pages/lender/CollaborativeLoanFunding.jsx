import React from "react";

const CollaborativeLoanFunding = () => {
  const loans = [
    {
      id: 1,
      borrower: "Ravi Sharma",
      amountNeeded: 100000,
      amountRaised: 75000,
      riskLevel: "Medium",
      creditScore: 720,
      interestRate: "12%",
      timeLeft: "2 days",
      coLenders: ["Amit Patel", "Neha Verma"],
    },
    {
      id: 2,
      borrower: "Vidhi Arora",
      amountNeeded: 100000,
      amountRaised: 50000,
      riskLevel: "Low",
      creditScore: 800,
      interestRate: "12%",
      timeLeft: "5 days",
      coLenders: ["Rahul Singh", "Sneha Gupta"],
    },
    {
      id: 3,
      borrower: "Arjun Nair",
      amountNeeded: 200000,
      amountRaised: 90000,
      riskLevel: "High",
      creditScore: 650,
      interestRate: "15%",
      timeLeft: "1 day",
      coLenders: ["Kavita Reddy", "Manoj Das"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Collaborative Loan Funding</h1>
      <p className="mb-4 text-gray-600">
        Join other lenders in funding these loans. Contribute partially and earn returns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map((loan) => (
          <div key={loan.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">{loan.borrower}</h2>
            <p className="text-gray-600">Credit Score: {loan.creditScore}</p>
            <p className="text-gray-600">Risk Level: {loan.riskLevel}</p>
            <p className="text-gray-600">Interest Rate: {loan.interestRate}</p>
            <p className="text-gray-600">Time Left: {loan.timeLeft}</p>
            
            <div className="w-full bg-gray-200 h-4 rounded-lg my-3">
              <div
                className="bg-blue-500 h-4 rounded-lg"
                style={{ width: `${(loan.amountRaised / loan.amountNeeded) * 100}%` }}
              ></div>
            </div>
            <p className="text-gray-600">
              ₹{loan.amountRaised.toLocaleString()} raised of ₹{loan.amountNeeded.toLocaleString()}
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Co-Funding Lenders: {loan.coLenders.join(", ")}
            </p>

            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Fund this Loan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborativeLoanFunding;
