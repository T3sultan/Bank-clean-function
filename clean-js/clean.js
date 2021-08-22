//input
function inputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldText = parseInt(inputField.value);
    inputField.value = '';
    return inputFieldText;

}
//total balance upper than 100
function getInnerTextValue(fieldId){
    const fieldTag=document.getElementById(fieldId)
    const fieldTagText=fieldTag.innerText;
    const value=parseFloat(fieldTagText);
    return value;

}
//depositTota and withDrawTotal
function updateTotal(fieldId, amount) {
    const totalField = document.getElementById(fieldId);
    const previousTotalFieldText = parseFloat(totalField.innerText);
    totalField.innerText = previousTotalFieldText + amount;

}
//total balance
function updateBalance(amount,isAddition){
    const balanceField=document.getElementById('balance-total');
    const balanceFieldText=balanceField.innerText;
    const balaceTotal=parseFloat(balanceFieldText);
    let newBalanceTotal;
    if(isAddition==true){
         newBalanceTotal=balaceTotal+amount;
        
    }
    else{
         newBalanceTotal=balaceTotal-amount
    }
    
    balanceField.innerText=newBalanceTotal
}
//deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {

   const amount= inputValue('deposit-input');
   if(amount>0){
    updateTotal('deposit-total',amount);
    updateBalance(amount,true)

   }
   
});
//withdraw button
document.getElementById('withDraw-btn').addEventListener('click', function () {

    const amount= inputValue('withDraw-input');
    const balance=getInnerTextValue('balance-total');
   
    if(amount>0 && amount<=balance){
        updateTotal('withDraw-total',amount);
        updateBalance(amount,false)
    }
 });
 