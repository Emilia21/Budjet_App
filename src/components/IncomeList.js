import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transactions-list">
        {incomeTransactions.map((incomeTransaction) => {
          return (
            <IncomeTransaction
              incomeTransaction={incomeTransaction}
              deleteTransaction={deleteTransaction}
              key={incomeTransaction.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default IncomeList;
