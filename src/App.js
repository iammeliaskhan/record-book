import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Telus Mobility",
    amount: 73.36,
    date: new Date(2020, 0, 19),
  },
  {
    id: "e2",
    title: "BestBuy",
    amount: 22.5,
    date: new Date(2020, 1, 2),
  },
  {
    id: "e3",
    title: "Amazing Shwarma",
    amount: 19.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 129.99,
    date: new Date(2020, 3, 12),
  },
  {
    id: "e5",
    title: "Medicine",
    amount: 45.99,
    date: new Date(2020, 4, 5),
  },
  {
    id: "e6",
    title: "Red Dead Redemption 2",
    amount: 89.99,
    date: new Date(2020, 5, 9),
  },
  {
    id: "e7",
    title: "Bus Ticket",
    amount: 29.99,
    date: new Date(2020, 6, 22),
  },
  {
    id: "e8",
    title: "Costco",
    amount: 99.99,
    date: new Date(2020, 7, 16),
  },
  {
    id: "e9",
    title: "Footlockers",
    amount: 69.69,
    date: new Date(2020, 8, 29),
  },
  {
    id: "e10",
    title: "LCBO",
    amount: 39.9,
    date: new Date(2020, 9, 15),
  },
  {
    id: "e11",
    title: "Indian Grocery",
    amount: 55.29,
    date: new Date(2020, 10, 5),
  },
  {
    id: "e12",
    title: "Spa",
    amount: 32.99,
    date: new Date(2020, 11, 26),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((PrevExpenses) => {
      return [expense, ...PrevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
