import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpensedata) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpensedata,
    };
    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };

  const cancelAddExpenseHandler = () => {
    setFormVisibility(false);
  };

  const addNewExpenseHandler = () => {
    setFormVisibility(true);
  };

  return (
    <div className={classes["new-expense"]}>
      {formVisibility && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddExpense={cancelAddExpenseHandler}
          /* Convention: It starts with "on" to make it clear that the value for this prop should be a function */
        />
      )}
      {!formVisibility && (
        <div>
          <button onClick={addNewExpenseHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
