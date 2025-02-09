import React from "react";
import { usePayment } from "../contexts";

function Result() {
  const {
    payment: { amount, calculations },
  } = usePayment();
  const interest =
    calculations.totalPayment - amount >= 0
      ? calculations.totalPayment - amount
      : 0;

  return (
    <section className="w-full md:w-1/2 bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Results</h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-white/40 pb-2">
          <p className="text-sm text-white/80">Monthly Payment</p>
          <p className="text-lg font-semibold">${calculations.monthlyPayment.toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center border-b border-white/40 pb-2">
          <p className="text-sm text-white/80">Total Payment</p>
          <p className="text-lg font-semibold">${calculations.totalPayment.toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-white/80">Total Interest</p>
          <p className="text-lg font-semibold">${interest.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}

export default Result;
