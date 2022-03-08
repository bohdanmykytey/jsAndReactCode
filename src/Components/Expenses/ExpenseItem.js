import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ date, title, amount }) {
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const handleChangeTitleClick = () => {
    setUpdatedTitle('Updated')
    console.log("clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{updatedTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleChangeTitleClick}>Title Change</button>
    </Card>
  );
}

export default ExpenseItem;
