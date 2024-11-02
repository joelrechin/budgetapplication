const { v4: uuid }  = require('uuid');

const emgr = window.sqlite.expensesDB;

export class Expense {

    id;
    name;
    description = '';
    budgetCategory;
    amount;
    monthlyAmount;
    annualAmount;
    frequency;
    periodStart;
    periodEnd;
    taxType;
    expenseType;

    constructor(name, budgetCategory, amount, frequency='monthly'){
        this.id = uuid();
        this.name = name;
        this.budgetCategory = budgetCategory;
        this.amount = amount;
        this.frequency = frequency;
        this._calcAmounts(amount);
    }

    _calcAmounts(amount){
        if(this.frequency === "monthly"){
            this.monthlyAmount = amount
            this.annualAmount = amount*12;
        }
        if(this.frequency === "annually"){
            this.monthlyAmount = amount/12;
            this.annualAmount = amount;
        }
    }

    getExpense(){
        const data = emgr.getExpense(this.id)[0];
        return data;
    }
}