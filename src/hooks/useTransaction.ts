import { useContext } from "react";
import { TransactionsContexts } from "../contexts/TransactionsContexts";

export function useTransaction() {
  const ctx = useContext(TransactionsContexts);

  return ctx;
}
