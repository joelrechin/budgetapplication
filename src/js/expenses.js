import { Expense } from "../modules/expense.js";

const emgr = window.sqlite.expensesDB;

console.log("EXPENSES JS WORKING");


fetch('expense-options.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('inner-left-sidebar').innerHTML = data;
        document.getElementById("add-category-button").addEventListener("click", () => {

            const newCategory = document.getElementById("new-category-input").value;
            if (newCategory) {
                const formattedCategory = newCategory.charAt(0).toUpperCase() + newCategory.slice(1).toLowerCase();
                window.expenseAPI.saveCategory(formattedCategory);
            }
        });
    })
    .catch(error => console.error('Error loading expenses-options.html:', error));

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




