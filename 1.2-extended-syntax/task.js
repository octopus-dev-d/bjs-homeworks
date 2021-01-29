"use strict";

function getResult(a,b,c){
   
    let d = (Math.pow(b, 2)) - 4 * a * c;
    let result = '';

        if (d < 0) {
            result = [];
        } else if (d == 0) {
            result = [(-b + Math.sqrt(d)) / (2 * a)];
        } else {
            result = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
        }
            return result;
}

function getAverageMark(marks){

    let sumResult = 0;
    let averageMark = '';
    const numberMarks = 5;

    if (marks.length == 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        sumResult = sumResult + marks[i];

        if (marks.length > numberMarks) {
            marks.splice(numberMarks);
        }
    }
    averageMark = sumResult / marks.length;  
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    
    let personAge = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result = '';

    if (personAge >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}