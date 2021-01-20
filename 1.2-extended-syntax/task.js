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
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}