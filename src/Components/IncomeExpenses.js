import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const IncomeExpenses = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((trans) => trans.amount);
  const income = amounts
    .filter((itm) => itm > 0)
    .reduce((acc, itm) => (acc = acc + itm), 0)
    .toFixed(2);

  const expense = amounts
    .filter((itm) => itm < 0)
    .reduce((acc, itm) => (acc = acc + itm), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};
