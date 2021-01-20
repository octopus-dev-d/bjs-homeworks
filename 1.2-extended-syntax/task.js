"use strict";

function getResult(a,b,c){
   
    let d = (Math.pow(b, 2)) - 4 * a * c;
    let result = [];

        if (d < 0) {
            result = [];
            return result;
        } else if (d == 0) {
            result = [(-b + Math.sqrt(d)) / (2 * a)];
            return result;
        } else {
            result = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
            return result;
        }
            return result;
}

function getAverageMark(marks){
    let sumResult = 0;
    let averageMark = '';
    const numberMarks = 5;
    for (let i = 0; i < marks.length; i++) {
        sumResult = sumResult + marks[i];
        if (marks.length > numberMarks) {
            console.log(marks.length);
            marks.splise(numberMarks);
        }
    }

    averageMark = sumResult / marks.length;
    console.log(averageMark);
    
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    
    let currentDate = new Date();
    console.log(currentDate);
    let personAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();
    let result = '';

    if (personAge >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
        return result;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
        return result;
    }

    return result;
}