import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date().toDateString();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 235.46;

  return (
    <div className="expense-item">
      <div>{props.title}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
