import React, { useState } from "react";
import { PaymentProvider } from "./contexts";
import PaymentForm from "./components/PaymentForm";
import Result from "./components/Result";

function App() {
  const [payment, setPayment] = useState({
    amount: 0,
    rate: 0,
    term: 0,
    calculations: { monthlyPayment: 0, totalPayment: 0 },
  });

  const updatePayment = (label, value) => {
    setPayment((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const calculateRepayment = (amount, rate, term) => {
    if (!amount || !term) {
      return;
    }

    const totalPayment = amount + (amount * rate * term) / 100;
    const monthlyPayment = totalPayment / term;
    setPayment((prev) => ({
      ...prev,
      calculations: { monthlyPayment, totalPayment },
    }));
  };

  return (
    <PaymentProvider
      value={{
        payment,
        updatePayment,
        calculateRepayment,
      }}
    >
      {/* ✅ Improved Header */}
      <header className="p-6 mb-6 bg-gradient-to-r from-green-600 to-green-400 text-white text-center shadow-md">
        <h1 className="font-extrabold text-3xl tracking-wide mb-3">
          Riba Calculator
        </h1>
        <p>
          O believers! Do not consume interest, multiplying it many times over.
          And be mindful of Allah, so you may prosper.
          <br />
          <span className="text-gray-200">Al-Imran:130</span>
        </p>
      </header>

      {/* ✅ Centered & Responsive Layout */}
      <main className="w-full max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center">
        <PaymentForm />
        <Result />
      </main>

      {/* ✅ Copyright Footer */}
      <footer className="mt-8 py-4 text-center text-gray-600 text-sm">
        <a href="https://github.com/adnanalisde/">
          &copy; Adnan Ali {new Date().getFullYear()}
        </a>{" "}
      </footer>
    </PaymentProvider>
  );
}

export default App;
