export interface TransactionProps {
  id: number;
  title: string;
  type: "withdraw" | "deposit";
  category: string;
  amount: number;
  createdAt: string;
}

export type TransactionInput = Omit<TransactionProps, "id" | "createdAt">;

export interface TransactionContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
