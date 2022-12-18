import classes from "./ExpenseDate.module.css";

const ExpenseDate = ({ date }) => {
  // helper variable - more complex logic here, keep your jsx clean
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>{month}</div>
      <div className={classes["expense-date__day"]}>{day}</div>
      <div className={classes["expense-date__year"]}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
