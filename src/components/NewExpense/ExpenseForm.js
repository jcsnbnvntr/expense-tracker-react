import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // gets an object (with 3 properties) as an initial state
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (ev) => {
    const title = ev.target.value;
    setUserInput((prevState) => ({ ...prevState, title: title }));
    // copy the userInput object state then override a specific property (title)
  };

  const amountChangeHandler = (ev) => {
    const amount = ev.target.value;
    setUserInput((prevState) => ({ ...prevState, amount: amount }));
  };

  const dateChangeHandler = (ev) => {
    const date = ev.target.value;
    setUserInput((prevState) => ({ ...prevState, date: date }));
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    const expenseDate = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };

    props.onSaveExpenseData(expenseDate); // from parent element (NewExpense)
    clearUserInput();
  };

  const cancelHandler = () => {
    props.onCancelAddExpense();
  };

  const clearUserInput = () => {
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={(ev) => submitHandler(ev)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(ev) => titleChangeHandler(ev)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={(ev) => amountChangeHandler(ev)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={(ev) => dateChangeHandler(ev)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
