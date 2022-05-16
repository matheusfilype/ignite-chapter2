import { createContext, ReactNode, useEffect, useState } from "react";
import {
  TransactionContextData,
  TransactionInput,
  TransactionProps,
} from "../interfaces/Transaction";
import { api } from "../services/api";

export const TransactionsContexts = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions((prev) => [...prev, transaction]);
  }

  return (
    <TransactionsContexts.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContexts.Provider>
  );
}
