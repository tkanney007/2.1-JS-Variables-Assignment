let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;
//1.Create a variable called average that computes for the average from grade1 to grade4
let average = (grade1 + grade2 + grade3 + grade4) / 4;

//2. Change the value of studentLastName to "Newman"

studentLastName = "Newman";

//3. Print in console the following statement: "<value of studentFirstName> <value of studentLastName> has an average grade of <value of average>"
//ex. Jane Doe has an average grade of 100.

console.log(
  `${studentFirstName} ${studentLastName} has an average grade of ${average}.`
);

//4. Write code that would answer this question: Did the student pass?
console.log("Did the student pass?");
console.log(
  average >= passingGrade
    ? `Yes ${studentFirstName} ${studentLastName} has passed as their average of ${average} is >= to the passing grade of ${passingGrade}.`
    : `No ${studentFirstName} ${studentLastName} has failed as their average of ${average} is not >= to the passing grade of ${passingGrade}.`
);
