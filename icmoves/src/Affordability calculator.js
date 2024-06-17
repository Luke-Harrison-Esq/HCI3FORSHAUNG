//Affordability/mortage calculator
//luke harrison
//25/02/2024
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function ACalc(props) {
  // State for mortgage calculator
  const [mortgageLoanAmount, setMortgageLoanAmount] = useState("");
  const [mortgageInterestRate, setMortgageInterestRate] = useState("");
  const [mortgageLoanTerm, setMortgageLoanTerm] = useState("");
  const [mortgageMonthlyPayment, setMortgageMonthlyPayment] = useState("");

  // State for affordability calculator
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [affordabilityResult, setAffordabilityResult] = useState("");

  // Function to calculate mortgage monthly payment
  const calculateMortgageMonthlyPayment = () => {
    const monthlyInterestRate = mortgageInterestRate / 1200; // Convert annual interest rate to monthly and percentage to decimal
    const numPayments = mortgageLoanTerm * 12; // Convert years to months
    const monthlyPaymentValue = (mortgageLoanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numPayments));
    setMortgageMonthlyPayment(monthlyPaymentValue.toFixed(2)); // Round to 2 decimal places
  };

  // Function to calculate affordability
  const calculateAffordability = () => {
    // Assuming a simple rule for affordability calculation: if disposable income is greater than or equal to 30% of monthly income, the user can afford the mortgage
    const disposableIncome = monthlyIncome - monthlyExpenses;
    const thirtyPercentOfIncome = monthlyIncome * 0.3;
    const canAfford = disposableIncome >= thirtyPercentOfIncome;
    setAffordabilityResult(canAfford ? "You can afford the mortgage" : "You cannot afford the mortgage");
  };

  return (
    <div className="flex flex-col pb-3 mx-auto w-full bg-white max-w-[480px]">
      {/* Mortgage Calculator */}
      <div className="flex flex-col w-full bg-white shadow-sm">
        <div className="flex gap-2 justify-between px-2 py-3 text-xl font-medium leading-6 text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/previews/012/043/552/original/eps10-grey-undo-or-back-arrow-icon-isolated-on-white-background-reload-or-rotate-or-arrow-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"
            className="w-6 aspect-square"
            alt="Back arrow"
          />
          <Link to="/" className="grow">
            Home
          </Link>
        </div>
        <div className="flex flex-col px-3 pt-4 pb-0.5 mt-3 w-full text-sm leading-5 whitespace-nowrap">
          <div className="text-lg font-medium leading-6 text-black">
            Mortgage Calculator
          </div>
          <div className="flex flex-col justify-center px-3 py-px mt-2.5">
            <div className="font-medium text-black">Loan Amount</div>
            <input
              type="number"
              value={mortgageLoanAmount}
              onChange={(e) => setMortgageLoanAmount(parseFloat(e.target.value))}
              className="justify-center px-3 py-2 mt-1 rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 text-ellipsis"
            />
          </div>
          <div className="flex flex-col justify-center px-3 py-px mt-2">
            <div className="font-medium text-black">Interest Rate</div>
            <input
              type="number"
              value={mortgageInterestRate}
              onChange={(e) => setMortgageInterestRate(parseFloat(e.target.value))}
              className="justify-center px-3 py-2 mt-1 rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 text-ellipsis"
            />
          </div>
          <div className="flex flex-col px-3 py-0.5 mt-2 text-black">
            <div className="font-medium">Loan Term (Years)</div>
            <input
              type="number"
              value={mortgageLoanTerm}
              onChange={(e) => setMortgageLoanTerm(parseInt(e.target.value))}
              className="justify-center px-3 py-2 mt-1 rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 text-ellipsis"
            />
          </div>
          <div
            className="justify-center items-center self-center px-16 py-2.5 mt-2 w-full text-base font-medium leading-6 text-white bg-black rounded-lg"
            onClick={calculateMortgageMonthlyPayment}
          >
            Calculate
          </div>
          {mortgageMonthlyPayment !== "" && (
            <div className="mt-3 w-full text-sm leading-5 text-black text-center bg-gray-200 p-2 rounded-md">
              <strong>Mortgage Monthly Payment:</strong> ${mortgageMonthlyPayment}
            </div>
          )}
        </div>
      </div>

      {/* Affordability Calculator */}
      <div className="flex flex-col w-full bg-white shadow-sm mt-5">
        <div className="flex gap-2 justify-between px-2 py-3 text-xl font-medium leading-6 text-black whitespace-nowrap">
        </div>
        <div className="flex flex-col px-3 pt-4 pb-0.5 mt-3 w-full text-sm leading-5 whitespace-nowrap">
          <div className="text-lg font-medium leading-6 text-black">
            Affordability Calculator
          </div>
          <div className="flex flex-col justify-center px-3 py-px mt-2.5">
            <div className="font-medium text-black">Monthly Income</div>
            <input
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(parseFloat(e.target.value))}
              className="justify-center px-3 py-2 mt-1 rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 text-ellipsis"
            />
          </div>
          <div className="flex flex-col justify-center px-3 py-px mt-2.5">
            <div className="font-medium text-black">Monthly Expenses</div>
            <input
              type="number"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value))}
              className="justify-center px-3 py-2 mt-1 rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 text-ellipsis"
            />
          </div>
          <div
            className="justify-center items-center self-center px-16 py-2.5 mt-2 w-full text-base font-medium leading-6 text-white bg-black rounded-lg"
            onClick={calculateAffordability}
          >
            Calculate
          </div>
          {affordabilityResult !== "" && (
            <div className="mt-3 w-full text-sm leading-5 text-black text-center bg-gray-200 p-2 rounded-md">
              <strong>Affordability Result:</strong> {affordabilityResult}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 px-5 mt-3 text-center text-black whitespace-nowrap bg-white shadow-sm leading-[140%]">
        <Link to="/" className="flex flex-col bg-gray-200 flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">🏠</div>
          <div className="text-xs text-ellipsis">Home</div>
        </Link>
        <Link to="/UserProfile" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">👤</div>
          <div className="text-xs text-ellipsis">My profile</div>
        </Link>
        <Link to="/AgentSearch" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">🧑‍💼</div>
          <div className="text-xs text-ellipsis">Our agents</div>
        </Link>
        <Link to="/CA" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">📞</div>
          <div className="text-xs text-ellipsis">Contact</div>
        </Link>>
      </div>
    </div>
  );
}

export default ACalc;