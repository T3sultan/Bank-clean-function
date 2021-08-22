
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amounValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amounValue;
}
function updateTotalField(totalFieldId, amount) {
    //debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;

    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}



//bank websit advance
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');

    if (depositAmount > 0) {
        //get and update  current deposit
        updateTotalField('deposit-total', depositAmount)
        //update  balance 
        updateBalance(depositAmount, true);
    }

})
//withdraw balance reduce
document.getElementById('withDraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withDraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        //get update withdraw total
        updateTotalField('withDraw-total', withdrawAmount);
        //update balance sit
        updateBalance(withdrawAmount, false);

    }
    if(withdrawAmount > currentBalance){
        console.log('sdfsjdkfsk')
    }

})
