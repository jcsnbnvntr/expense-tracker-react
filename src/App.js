import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2022, 9, 16),
    title: "WiFi",
    amount: 2000,
  },
  {
    id: 2,
    date: new Date(2022, 10, 16),
    title: "Car Maintenance",
    amount: 5000,
  },
  {
    id: 3,
    date: new Date(2020, 9, 10),
    title: "Shoes",
    amount: 5000,
  },
  {
    id: 4,
    date: new Date(2019, 8, 14),
    title: "Laptop",
    amount: 50000,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
      // updating state based on previos state
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* Passing a function which will eventually be trigerred when something is happened inside the ExpenseForm component */}
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
