import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Balance = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((trans) => trans.amount);
  const total = amounts.reduce((acc, itm) => acc + itm, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
