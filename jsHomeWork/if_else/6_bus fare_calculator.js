/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 65, student = true, mangoPeople = true;

// if (age < 10) {
//     console.log("Free");
// }else if (student) {
//     console.log('50% disconunt')
// } else if (age >= 60) {
//     console.log('15% Discount')
// }else {
//     console.log('ticket fare 800 tk')
// }

// tarnary operation 
(age < 10) ? console.log("Free")
    : (student) ? console.log('50% disconunt')
    : (age >= 60) ? console.log('15% Discount')
    : console.log('ticket fare 800 tk')
