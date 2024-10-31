import { Expense } from "../modules/expense.js";
const expensemgr = require("../modules/db/expensemgr.js");
const {contextBridge} = require('electron');



const expense = new Expense("test", "insurance", 150.00);
console.log(expense.name);
console.log(expense.id);

const getExpenses = () => {
    return expensemgr.getExpense();
}

contextBridge.exposeInMainWorld('api', {
    getExpenses: getExpenses
})
console.log(getExpenses());

