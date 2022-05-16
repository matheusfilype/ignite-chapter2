import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { dateFormat, moneyFormat } from "../../utils/Format";
import { Container } from "./styles";

interface RowsStateProps {
  id: number;
  title: string;
  type: "withdraw" | "deposit";
  amount: number;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<RowsStateProps[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {moneyFormat(transaction.amount)}
              </td>
              <td>{transaction.title}</td>
              <td>{dateFormat(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
