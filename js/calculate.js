// handle deposit button event
document.getElementById('calculate-button').addEventListener('click', function () {
    // get the amount income
    const incomeInput = document.getElementById('income-input');
    const newincomeAmountText = incomeInput.value;
    const newincomeAmount = parseFloat(newincomeAmountText);
    //Expenses amount
    const foodInput = document.getElementById('food-input');
    const newfoodAmountText = foodInput.value;
    const newfoodAmount = parseFloat(newfoodAmountText);

    const rentInput = document.getElementById('rent-input');
    const newrentAmountText = rentInput.value;
    const newrentAmount = parseFloat(newrentAmountText);

    const clothInput = document.getElementById('clothes-input');
    const newclothAmountText = clothInput.value;
    const newclothAmount = parseFloat(newclothAmountText);

    // update expenses total
    const expensesTotal = document.getElementById('expenses-total');
    const allExpensesText = expensesTotal.innerText;
    const allExpensesAmount = parseFloat(allExpensesText);
    const newDepositTotal = newfoodAmount + newrentAmount + newclothAmount;

    expensesTotal.innerText = newDepositTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const allIncomeText = balanceTotal.innerText;
    const allincomeAmount = parseFloat(allIncomeText);
    const newIncomeTotal = newincomeAmount - newDepositTotal;

    balanceTotal.innerText = newIncomeTotal;
});

//saving part

