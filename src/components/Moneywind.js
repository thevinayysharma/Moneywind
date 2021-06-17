import React from "react";
import { Header } from "../components/Header";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { AddTransaction } from "../components/AddTransaction";

import { GlobalProvider } from "../context/GlobalState";

import "../App.css";

function Moneywind() {
  return (
    <GlobalProvider>
      <Header />
      <div className="dashboard-container">
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className="history-container">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default Moneywind;
