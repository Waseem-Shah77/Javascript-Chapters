var getAge = prompt("Enter You Date of Birth to find out your age.");

var now = new Date();
var newYear = now.getFullYear()
var mid = now.setFullYear(getAge);
var curr = now.setFullYear(newYear);
var cal = curr - mid;
var yourAge = Math.round(cal / 1000 / 60 / 60 / 24 / 365);
console.log(yourAge);