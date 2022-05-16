import { useTransaction } from "../../hooks/useTransaction";
import { dateFormat, moneyFormat } from "../../utils/Format";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransaction();

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
