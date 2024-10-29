class Expense {

    name;
    description = '';
    budgetCategory;
    amount;
    #monthlyAmount;
    #annualAmount;
    frequency;
    periodStart;
    periodEnd;
    taxType;
    expenseType;

    constructor(name, budgetCategory, amount, frequency='monthly'){
        this.name = name;
        this.budgetCategory = budgetCategory;
        this.amount = amount;
        this.frequency = frequency;
        this._calcAmounts(amount);
    }

    _calcAmounts(amount){
        if(this.frequency = "monthly"){
            this.#monthlyAmount = amount
            this.#annualAmount = amount*12;
        }
        if(this.frequency = "annually"){
            this.#monthlyAmount = amount/12;
            this.#annualAmount = amount;
        }
    }
    



}