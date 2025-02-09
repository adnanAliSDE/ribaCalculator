import React from "react";
import { usePayment } from "../contexts";

function InputBox({ label }) {
  const { payment, updatePayment, calculateRepayment } = usePayment();

  const handleChange = (e) => {
    updatePayment(label, e.target.value === "" ? "" : parseInt(e.target.value));
    // Enable this code for realtime result updation.
    /*
    const paymentData = {
      ...payment,
      [label]: parseInt(e.target.value ? e.target.value : 0),
    };
    const { amount, rate, term } = paymentData;
    calculateRepayment(amount, rate, term);
    */
  };

  const labelCapitalized = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <div className="form-group flex flex-col space-y-1 mb-2">
      <label className="text-sm font-medium text-gray-700">
        {labelCapitalized}
      </label>
      <input
        className="w-full mt-1 px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-gray-400"
        type="number"
        placeholder={`Enter ${labelCapitalized}`}
        value={payment[label]}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputBox;
