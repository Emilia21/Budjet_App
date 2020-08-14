import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeTransactionsAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const expenseTransactionsAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const balance = {
    totalIncomes: incomeTransactionsAmounts.reduce(
      (acc, item) => (acc += parseInt(item)),
      0
    ),
    totalExpenses: expenseTransactionsAmounts.reduce(
      (acc, item) => (acc += parseInt(item)),
      0
    ),
  };

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${balance.totalIncomes - balance.totalExpenses}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${balance.totalIncomes}</p>
        </div>
        <div className="minus">
          <h3>Expense</h3>
          <p>-${balance.totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
