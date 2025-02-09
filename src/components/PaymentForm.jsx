import React from "react";
import { usePayment } from "../contexts";
import InputBox from "./InputBox";

function PaymentForm() {
  const { payment, calculateRepayment } = usePayment();

  function handleCalculate() {
    console.log("Calculating...");
    console.table(payment);
    const { amount, rate, term } = payment;
    calculateRepayment(amount, rate, term);
  }

  return (
    <section className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Payment Details</h1>

      <div className="space-y-4">
        <InputBox label="amount" />
        <InputBox label="rate" />
        <InputBox label="term" />
      </div>

      <button
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-md"
        onClick={handleCalculate}
      >
        Calculate
      </button>
    </section>
  );
}

export default PaymentForm;
