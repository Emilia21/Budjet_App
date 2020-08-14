import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transactions-list">
        {expenseTransactions.map((expenseTransaction) => {
          return (
            <ExpenseTransaction
              expenseTransaction={expenseTransaction}
              deleteTransaction={deleteTransaction}
              key={expenseTransaction.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
