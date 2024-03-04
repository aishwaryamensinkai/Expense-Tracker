import "./App.css";
import { AddTransaction } from "./Components/AddTransaction";
import { Balance } from "./Components/Balance";
import { Header } from "./Components/Header";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import { TansactionList } from "./Components/TansactionList";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TansactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
