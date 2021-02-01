"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount = null;
    let percentInt = parseFloat(percent);
    let contributionInt = parseFloat(contribution);
    let amountInt = parseFloat(amount);
    let dateMonth = new Date(date).getMonth();
    let dateYears = new Date(date).getFullYear();
    let dateMonthNow = new Date().getMonth();
    let dateYearsNow = new Date().getFullYear();
    let monthAmount = (12-(dateMonthNow+1)) + ((dateYears - (dateYearsNow+1)) * 12) + (dateMonth + 1);   
    console.log(percentInt);
    
    if (isNaN(percentInt)) {
        return(`Параметр "Процентная ставка" содержит неправильное значение: ${percent}`);
    } else if (isNaN(contributionInt)) {
        return(`Параметр "Первоначальный взнос" содержит неправильное значение: ${contribution}`);
    } else if (isNaN(amountInt)) {
        return(`Параметр "Сумма кредита" содержит неправильное значение: ${amount}`);
    } else if (monthAmount < 0) {
        return("Срок кредита должен быть больше 1 месяца");
    } else {
        let loadBody = amountInt - contributionInt;
        let p = percentInt/100 * (1/12);
        let pay = loadBody * (p + p / (((1 + p)**monthAmount) - 1));
        let amountSumm =  pay * monthAmount;
        console.log(amountSumm.toFixed(2)); 
        totalAmount = amountSumm.toFixed(2); 
    } 
    
     return parseFloat(totalAmount);
}

function getGreeting(name) {
    let greeting;
    if (!!name) {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    } else {
        greeting = `Привет, мир! Меня зовут Аноним.`;
    }
    return greeting;
}