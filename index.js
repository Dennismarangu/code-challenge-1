// Student Grade Generator (Toy Problem)

function prompt() {
    return prompt;
}

let marks = prompt("Enter the student's marks (between 0 and 100):");
marks = parseInt(marks);
    
if (marks < 0 || marks > 100 || isNaN(marks)) {
  console.log("Invalid input. Please enter a nummber between 0 and 100");

let marks = "90";

  if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60 && marks < 80) {
  console.log("Grade: B");
} else if (marks >= 50 && marks < 60) {
    console.log("Grade: C");
} else if (marks >= 40 && marks < 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: E");
}
console.log(`Student Grade: ${marks}`);

}


// Speed Detector (Toy Problem)

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint ); 

if (speed <= speedLimit) {
    console.log("Ok");
} else if (demeritPoints >= 12) {
    console.log("License suspended");
} else {
    console.log("Points: " + demeritPoints);
}
 
} 
calculateDemeritPoints(100);


// Net Salary Calculator (Toy Problem)

let basicSalary = 1000000.57;
let benefits = 50000

let personBasicSalary = parseFloat(prompt("Enter Basic Salary: "));
let personBenefits = parseFloat(prompt("Enter Benefits: "));

const TAX_RATE = 0.3;
const NHIF_RATE = 0.02;
const NSSF_RATE = 0.01;

let grossSalary = basicSalary + benefits;
let taxDeduction = grossSalary * TAX_RATE;
let nhifDeduction = grossSalary * NHIF_RATE;
let nssfDeduction = grossSalary * NSSF_RATE;

let netSalary = (grossSalary - (taxDeduction + nhifDeduction + nssfDeduction));


console.log(`Basic Salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Tax Deduction: ${taxDeduction}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction: ${nssfDeduction}`);
console.log(`Net Salary: ${netSalary}`);