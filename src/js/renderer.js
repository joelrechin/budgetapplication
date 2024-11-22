
window.api.greet("Hello from renderer.js");

// let categories = [];
// const getCategories = async () => {
//     categories = await window.api.LoadCategories();
//     console.log(categories);
// };

// getCategories();
// getCategories();

let overview = document.getElementById("overview-container");
console.log(overview);  
let investements = document.getElementById("investments-container");
console.log(investements);
let income = document.getElementById("income-container");
console.log(income);





//On intial load, load the overview page
// fetch('overview.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('content').innerHTML = data;
//     })
//     .catch(error => console.error('Error loading overview.html:', error));

//Outer-left-sidebar navigation buttons

document.getElementById("overview-button").addEventListener("click", () => {

    overview.style.display = "block";
    investements.style.display = "none";
    income.style.display = "none";
    // fetch('overview.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById('content').innerHTML = data;
    //     })
    //     .catch(error => console.error('Error loading overview.html:', error));
    console.log("Overview page loaded");
});

document.getElementById("income-button").addEventListener("click", () => {

    overview.style.display = "none";
    investements.style.display = "none";
    income.style.display = "block";
    // fetch('income.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById('content').innerHTML = data;
    //     })
    //     .catch(error => console.error('Error loading income.html:', error));
    console.log("Income page loaded");
});

document.getElementById("expenses-button").addEventListener("click", () => {
    fetch('expenses.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading expenses.html:', error));
    console.log("Expense page loaded");
});

document.getElementById("investments-button").addEventListener("click", () => {

    overview.style.display = "none";
    investements.style.display = "block";
    income.style.display = "none";
    // fetch('investments.html')
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById('content').innerHTML = data;
    //     })
    //     .catch(error => console.error('Error loading investments.html:', error));
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

// function loadExpensesJS(){
//     const script = document.createElement("script");
//     script.src = "../js/expenses.js";
//     script.type = "module";
//     document.head.appendChild(script);
// }; 
















