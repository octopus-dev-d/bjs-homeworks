// Задание 1

function getSolutions(a, b, c){
    let D = Math.pow(b, 2) - (4 * a * c);
 
    switch (true) {
       case (D < 0):
          return {D: D, roots: []}
       case (D == 0):
          let x1 = -b / (2 * a);
          return {D: D, roots: [x1]}
       case (D > 0):
          let x2 = (-b + Math.sqrt(D)) / (2 * a);
          let x3 = (-b - Math.sqrt(D)) / (2 * a);
          return {D: D, roots: [x2, x3]}
       }
 }
 
 function showSolutionsMessage(a, b, c) {
    let result = getSolutions( a, b, c );
 
    console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
    console.log(`Значение дискриминанта: ${result.D}`);
 
    switch (true) {
       case (result.D < 0) :
          console.log("Уравнение не имеет вещественных корней");
          break;
       case (result.D == 0) :
          console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
          break;
       case (result.D > 0) :
          console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
          break;
    }
 }

 // Задание 2

 function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let sum = 0;
  
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  }
  
  
  function getAverageScore(data) {
    if (!data) return 0;
  
    const cloneData = { ...data };
  
    let sumMarks = 0;
    let countMarks = 0;
  
    for (let key in cloneData) {
      cloneData[key] = getAverageMark(cloneData[key]);
  
      sumMarks += cloneData[key];
      countMarks++;
    }
  
    sumMarks = sumMarks / countMarks;
    if (countMarks == 0) sumMarks = 0;
  
    cloneData.average = sumMarks;
  
    return cloneData;
  }
  

  // Задание 3

  function getPersonData(secretData) { 
    return { firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb) };
  }
  
  function getDecodedValue(secret) {
    if (secret == "1") return "Эмильо";
    if (secret == "0") return "Родриго";
    return "Broken data";
  }