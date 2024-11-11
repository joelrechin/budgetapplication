// import { Expense } from "../modules/expense.js";



// const emgr = window.sqlite.expensesDB;
//emgr.addExpense(expense);
//const expense = new Expense("Cell", "Insurance", 150.00);




//On intial load, load the overview page
fetch('overview.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('content').innerHTML = data;
    })
    .catch(error => console.error('Error loading overview.html:', error));

//Outer-left-sidebar navigation buttons

document.getElementById("overview-button").addEventListener("click", () => {
    fetch('overview.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading overview.html:', error));
    console.log("Overview page loaded");
});

document.getElementById("income-button").addEventListener("click", () => {
    fetch('income.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading income.html:', error));
    console.log("Income page loaded");
});

document.getElementById("expenses-button").addEventListener("click", () => {
    fetch('expenses.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            loadExpensesJS();
        })
        .catch(error => console.error('Error loading expenses.html:', error));
    console.log("Expense page loaded");
});

document.getElementById("investments-button").addEventListener("click", () => {
    fetch('investments.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading investments.html:', error));
    console.log("Investments page loaded");
});

document.getElementById("settings-button").addEventListener("click", () => {
    fetch('settings.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading settings.html:', error));
    console.log("Settings page loaded");
});

function loadExpensesJS(){
    const script = document.createElement("script");
    script.src = "../js/expenses.js";
    script.type = "module";
    document.head.appendChild(script);
}; 















