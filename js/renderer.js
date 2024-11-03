import { Expense } from "../modules/expense.js";



const emgr = window.sqlite.expensesDB;

const expense = new Expense("Cell", "Insurance", 150.00);

emgr.addExpense(expense);
console.log(expense.getExpense())
//console.log(expense.getExpense())








