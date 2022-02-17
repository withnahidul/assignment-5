//income input
function incomeInputfunc() {
    let incomeInput = document.getElementById('income-input');
    let income = parseFloat(incomeInput.value);
    return income;
}
function foodInputfunc() {
    let foodInput = document.getElementById('food-input');
    let food = parseFloat(foodInput.value);
    return food;
}
function rentInputfunc() {
    let rentInput = document.getElementById('rent-input');
    let rent = parseFloat(rentInput.value);
    return rent;
}
function clothesInputfunc() {
    let clothesInput = document.getElementById('clothes-input');
    let clothes = parseFloat(clothesInput.value);
    return clothes;
}

function balancefunc() {
    let balance = document.getElementById('balance').innerText;
    return balance;
}
document.getElementById('calculate-button').addEventListener('click', function () {
    let income = incomeInputfunc();
    let food = foodInputfunc();
    let rent = rentInputfunc();
    let clothes = clothesInputfunc();

    //expenses part

    if ((income < 0) || (food < 0) || (rent) < 0 || (clothes < 0)) {
        alert('Error negative value');
    }
    else {
        let tExpense = food + rent + clothes;
        if (income >= tExpense) {
            document.getElementById('total-expenses').innerText = tExpense;
            let temp = income - tExpense;
            document.getElementById('balance').innerText = temp;
        }
        else {
            err();
        }
    }
});
function err() {
    let income = incomeInputfunc();
    let food = foodInputfunc();
    let rent = rentInputfunc();
    let clothes = clothesInputfunc();

    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        alert('Error give number only');
    }
    else {
        alert('Error give number only');
    }
}
document.getElementById('saving-button').addEventListener('click', function () {

    var income = incomeInputfunc();
    var balance = balancefunc();
    var savingInput = document.getElementById('saving-input');
    var saved = parseFloat(savingInput.value);
    var savedAmount = (income / 100) * saved;
    if ((income > saved) && (saved <= balance) && (savedAmount <= balance) && (saved >= 0)) {
        document.getElementById('savings-amount').innerText = savedAmount;
        let remainingBalance = balance - savedAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    else {
        alert('Error');
    }
});