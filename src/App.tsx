import { useState } from "react";
import "./App.css";
import TransactionForm from "./TransactionForm";

function Button({ onClick }) {
  return (
    <>
      <button onClick={onClick}>Criar transação</button>
    </>
  );
}

function App() {
  const [showForm, setCount] = useState(false);
  function handleClick() {
    setCount(!showForm);
  }

  return (
    <>
      <h1>Bem vindo ao MoneyTracker</h1>
      <h2>Vamos organizar seus gastos!</h2>
      {showForm ? <Button onClick={handleClick} /> : <TransactionForm />}
    </>
  );
}

export default App;
