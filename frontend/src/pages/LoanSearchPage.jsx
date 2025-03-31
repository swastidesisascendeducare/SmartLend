import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const LoanMatchingPage = () => {
  const [loanMatches, setLoanMatches] = useState([]);
  const [collaborativeLoans, setCollaborativeLoans] = useState([]);
  const [requestedLoans, setRequestedLoans] = useState({});
  const [interestRateFilter, setInterestRateFilter] = useState([0, 50]);
  const [tenureFilter, setTenureFilter] = useState("All");
  const [acceptedLoans, setAcceptedLoans] = useState({});
  const borrowerId = "67e79f25380f8ee9318dd9b1";

  const tenureOptions = ["All", "6 months", "12 months", "18 months", "24 months"];

  useEffect(() => {
    const fetchLoanMatches = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/loans/match/${borrowerId}`
        );
        setLoanMatches(response.data);
      } catch (error) {
        console.error("Error fetching loan matches:", error.response?.data || error.message);
      }
    };

    const fetchCollaborativeFunding = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/loans/best-collaborative");
        setCollaborativeLoans(response.data);
      } catch (error) {
        console.error("Error fetching collaborative funding:", error.response?.data || error.message);
      }
    };

    fetchLoanMatches();
    fetchCollaborativeFunding();
  }, []);

  const requestLoan = async (loan) => {
    try {
      const requestData = {
        borrowerId,
        amountRequested: loan.amountRequested,
        interestRate: loan.interestRate,
        loanTerm: loan.loanTerm,
        approvedByML: true,
      };

      await axios.post("http://localhost:5001/api/loans/request-loan", requestData);
      toast.success("🎉 Loan request submitted successfully!");
      setRequestedLoans({ ...requestedLoans, [loan._id]: true });
    } catch (error) {
      console.error("Error requesting loan:", error.response?.data || error.message);
      toast.error("Error submitting loan request!");
    }
  };

  const handleRequestLoan = (loan) => {
    if (requestedLoans[loan._id]) {
      toast.info("Loan request canceled. Accepted!");
      setRequestedLoans({ ...requestedLoans, [loan._id]: false });
      setAcceptedLoans({ ...acceptedLoans, [loan._id]: true });
    } else {
      requestLoan(loan);
      setAcceptedLoans({ ...acceptedLoans, [loan._id]: false });
    }
  };

  const filteredLoans = (loans) => {
    return loans.filter((loan) =>
      loan.interestRate >= interestRateFilter[0] &&
      loan.interestRate <= interestRateFilter[1] &&
      (tenureFilter === "All" || `${loan.loanTerm} months` === tenureFilter)
    );
  };

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4">Loan Options</h2>

      <div className="flex flex-row w-full">
        <div className="w-64 bg-white p-4 rounded-lg shadow-sm mr-4">
          <h3 className="text-lg font-bold mb-2">Filters</h3>
          <label className="block mb-2 font-semibold">Interest Rate Filter:</label>
          <Slider
            range
            value={interestRateFilter}
            onChange={setInterestRateFilter}
            min={0}
            max={50}
            step={1}
          />
          <div className="flex justify-between text-gray-600">
            <span>{interestRateFilter[0]}%</span>
            <span>{interestRateFilter[1]}%</span>
          </div>

          <label className="block mb-2 font-semibold">Tenure Filter:</label>
          <select
            value={tenureFilter}
            onChange={(e) => setTenureFilter(e.target.value)}
            className="block w-full p-2 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-blue-500"
          >
            {tenureOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <Tabs>
            <TabList>
              <Tab>Loan Matches</Tab>
              <Tab>Collaborative Loans</Tab>
            </TabList>

            <TabPanel>
              <h3 className="text-2xl font-semibold mb-4">Loan Matches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLoans(loanMatches).map((loan) => (
                  <div key={loan._id} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold">Loan ID: {loan._id}</h4>
                    <p className="text-sm text-gray-600">Amount: ₹{loan.amountRequested}</p>
                    <p className="text-sm text-gray-600">Interest Rate: {loan.interestRate}%</p>
                    <p className="text-sm text-gray-600">Tenure: {loan.loanTerm} months</p>
                    {acceptedLoans[loan._id] ? (
                      <p className="text-sm text-green-500 font-semibold mt-2">✅ Accepted</p>
                    ) : (
                      <button
                        onClick={() => handleRequestLoan(loan)}
                        className={`mt-2 px-4 py-2 ${requestedLoans[loan._id] ? "bg-red-500" : "bg-blue-500"} text-white rounded-lg`}
                      >
                        {requestedLoans[loan._id] ? "Cancel" : "Request Loan"}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <h3 className="text-2xl font-semibold mb-4">Collaborative Loans</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLoans(collaborativeLoans).map((loan) => (
                  <div key={loan._id} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold">Loan ID: {loan._id}</h4>
                    <p className="text-sm text-gray-600">Amount: ₹{loan.amountRequested}</p>
                    <p className="text-sm text-gray-600">Interest Rate: {loan.interestRate}%</p>
                    <p className="text-sm text-gray-600">Tenure: {loan.loanTerm} months</p>
                    {acceptedLoans[loan._id] ? (
                      <p className="text-sm text-green-500 font-semibold mt-2">✅ Accepted</p>
                    ) : (
                      <button
                        onClick={() => handleRequestLoan(loan)}
                        className={`mt-2 px-4 py-2 ${requestedLoans[loan._id] ? "bg-red-500" : "bg-blue-500"} text-white rounded-lg`}
                      >
                        {requestedLoans[loan._id] ? "Cancel" : "Request Loan"}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LoanMatchingPage;
