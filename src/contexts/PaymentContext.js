import { createContext, useContext } from "react";

const PaymentContext = createContext({
  payment: {
    amount: 0,
    rate: 0,
    term: 0,
    calculations: {
      monthlyPayment: 0,
      totalPayment: 0,
    },
  },
  updatePayment: (label, value) => {},
  calculateRepayment: (amount, rate, term) => {},
});

const PaymentProvider = PaymentContext.Provider;

const usePayment = () => useContext(PaymentContext);

export { PaymentContext, PaymentProvider, usePayment };
