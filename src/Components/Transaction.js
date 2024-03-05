import React from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({ trans }) => {
  const sign = trans.amount < 0 ? "-" : "+";
  const { deleteTransaction } = React.useContext(GlobalContext);
  return (
    <li className={trans.amount < 0 ? "minus" : "plus"}>
      {trans.text}
      <span>
        {sign}${Math.abs(trans.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(trans.id)}
      >
        x
      </button>
    </li>
  );
};
