// eslint-disable-next-line no-unused-vars
import React, { Reducer, createContext } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transaction: [],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  //Action: DELETE_TRANSACTION
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  //Action: ADD_TRANSACTION
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
