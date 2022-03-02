import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import './ExpenseItem.css';

function ExpenseItem({date, title, amount}) {

  const handleChangeTitleClick = () => {
    console.log('clicked')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleChangeTitleClick}>Title Change</button>
    </Card>
  );
}

export default ExpenseItem;
