import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";

export const TansactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((trans) => (
          <Transaction key={trans.id} trans={trans} />
        ))}
      </ul>
    </>
  );
};
