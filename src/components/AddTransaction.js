import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import uuid from "uuid/dist/v1";

const AddTransaction = () => {
  const [incomeText, setIncomeText] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);

  const [expenseText, setExpenseText] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  const { addIncome, addExpense } = useContext(GlobalContext);

  const handleIncomeTextChange = (e) => {
    setIncomeText(e.target.value);
  };

  const handleIncomeAmountChange = (e) => {
    setIncomeAmount(e.target.value);
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    addIncome({
      id: uuid(),
      incomeText,
      incomeAmount,
    });
    setIncomeAmount(0);
    setIncomeText("");
  };

  const handleExpenseTextChange = (e) => {
    setExpenseText(e.target.value);
  };

  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    addExpense({
      id: uuid(),
      expenseText,
      expenseAmount,
    });
    setExpenseAmount(0);
    setExpenseText("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleIncomeSubmit}>
        <div className="input-group income">
          <input
            type="text"
            value={incomeText}
            onChange={handleIncomeTextChange}
            placeholder="Add Income"
            autoComplete="off"
            required
          />
          <input
            type="number"
            value={incomeAmount}
            onChange={handleIncomeAmountChange}
            placeholder="Amount"
            autoComplete="off"
            required
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={handleExpenseSubmit}>
        <div className="input-group expense">
          <input
            value={expenseText}
            onChange={handleExpenseTextChange}
            type="text"
            placeholder="Add Expense"
            autoComplete="off"
          />
          <input
            value={expenseAmount}
            onChange={handleExpenseAmountChange}
            type="number"
            placeholder="Amount"
            autoComplete="off"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
