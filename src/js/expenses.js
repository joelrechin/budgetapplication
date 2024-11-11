import { Expense, expenseCategories } from "../modules/expense.js";
const emgr = window.sqlite.expensesDB;

//load expense categories in dropdown
const categorySelect = document.getElementById("expense-category");
expenseCategories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
});


fetch('expense-options.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('inner-left-sidebar').innerHTML = data;
    })
    .catch(error => console.error('Error loading expenses-options.html:', error));

console.log("expenses.js loaded");

document.getElementById("test-button").addEventListener("click", () => {
    console.log("test button clicked");
}); 

document.addEventListener("submit", (e) => {
    if (e.target && e.target.id == "expense-form") {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    const expense = new Expense(formData.get("name"), formData.get("budgetcategory"), parseFloat(formData.get("amount")), formData.get("frequency"));
    emgr.addExpense(expense);
}
});

document.addEventListener("click", (e) => {
    if (e.target && e.target.id == "expense-ongoing") {
    document.getElementById("expense-date").disabled = e.target.checked;
}});




