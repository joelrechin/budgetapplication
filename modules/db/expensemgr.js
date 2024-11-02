var dbmgr = require("./dbmgr");
var db = dbmgr.db;

exports.getExpenses = () => {
    const query = "SELECT * FROM expenses";
    const readQuery = db.prepare(query);
    const rowList = readQuery.all();
    return rowList;
}

exports.getExpense = (id) => {
    const query = `SELECT * FROM expenses WHERE id = '${id}'`;
    const readQuery = db.prepare(query);
    const rowList = readQuery.all();
    return rowList;
}

exports.addExpense = (expense) => {

    const query = `INSERT INTO expenses (id, name, description, budgetcategory, amount, monthlyamount, annualamount, frequency) VALUES ('${expense.id}', '${expense.name}', '${expense.description}', '${expense.budgetCategory}',${expense.amount},${expense.monthlyAmount},${expense.annualAmount}, '${expense.frequency}')`;
    db.exec(query);
}

//, frequency, periodstart, periodend, taxtype, expensetype

// '${expense.frequency}','${expense.periodstart}','${expense.periodend}','${expense.taxtype}','${expense.expensetype}'








