/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let marks = "ok";

if (marks >= 90 && marks <= 100) {
    console.log("you are A+");
} else if (marks >= 80 && marks <= 89) {
    console.log("you are B");
} else if (marks >= 70 && marks <= 79) {
    console.log("you are C");
}else if (marks >= 60 && marks <= 69){
    console.log("you are D");
}else if (marks > 0 && marks < 59){
    console.log('you are fail');
}else {
    console.log(`${marks} is not a valid things. please enter 0 - 100`);
}

