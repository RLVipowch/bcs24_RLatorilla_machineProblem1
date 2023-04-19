// ITCS 227 Source Code 2T AY 2022-2023 
/* 
     Program:        Computation of Grades using Function
     Programmer:     Roberto Latorilla
     Section:        BCS24
     Start Date:     April 18, 2023
     End Date:       

*/

let studentnames = [];
let classParticipation = [];
let summativeAssessment = [];
let examGrade = [];
let gradeScore = [];
const letterGrade = [];

for (let i = 0; i < 5; i++) {
  studentnames.push(prompt(`Enter the name of student ${i+1}:`));
  
  let cpTotal = 0;
  for (let j = 0; j < 5; j++) {
    cpTotal += parseFloat(prompt(`Enter enabling assessment ${j+1}:`));
  }
classParticipation.push(cpTotal / 5);
  
  let sumTotal = 0;
  for (let j = 0; j < 3; j++) {
    sumTotal += parseFloat(prompt(`Enter summative assessment ${j+1}:`));
  }
  summativeAssessment.push(sumTotal / 3);
  
  examGrade.push(parseFloat(prompt(`Enter major exam grade:`)));
}

for (let i = 0; i < 5; i++) {
  gradeScore.push(classParticipation[i] * 0.3 + summativeAssessment[i] * 0.3 + examGrade[i] * 0.4);
  
  if (gradeScore[i] >= 90) {
    letterGrade.push("A");
  } else if (gradeScore[i] >= 80) {
    letterGrade.push("B");
  } else if (gradeScore[i] >= 70) {
    letterGrade.push("C");
  } else if (gradeScore[i] >= 60) {
    letterGrade.push("D");
  } else {
    letterGrade.push("F");
  }
}

console.log("Name\tClass Participation\tSummative Assessment\tExam Grade\tGrade Score\tLetter Grade");
for (let i = 0; i < 5; i++) {
  console.log(`${studentnames[i]}\t\t${classParticipation[i].toFixed(2)}\t\t${summativeAssessment[i].toFixed(2)}\t\t${examGrade[i]}\t\t${gradeScore[i].toFixed(2)}\t\t${letterGrade[i]}`);
}