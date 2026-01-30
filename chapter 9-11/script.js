var getData = prompt("Enter City Name");
if(getData.toUpperCase() === "karachi".toUpperCase()){
    console.log("Welcome to the city of lights");
}

var checkGender = prompt("Enter You Gender");
if(checkGender.toUpperCase() === "male".toUpperCase()){
    console.log("Good Morning Sir");
} else if(checkGender.toUpperCase() === "female".toUpperCase()){
     console.log("Good Morning Ma'am")
}else{
    console.log("Please Enter Correct Gender");
}

var red = document.getElementsByClassName("red")[0];
var yellow = document.getElementsByClassName("yellow")[0];
var green = document.getElementsByClassName("green")[0];
var redMess = document.getElementsByClassName("forRed")[0];
var yelllowMess = document.getElementsByClassName("forYellow")[0];
var greenMess = document.getElementsByClassName("forGreen")[0];
for(var i = 1; i <= 3; i++){
var signalColor = prompt("Enter Signal Colors name");
if(signalColor.toUpperCase() === 'red'.toUpperCase()){
    red.innerText = signalColor;
    redMess.innerText = 'Must Stop'
    red.style.backgroundColor = 'red';
} else if(signalColor.toUpperCase() === 'yellow'.toUpperCase()){
    yellow.innerText = signalColor;
    yelllowMess.innerText = 'Ready to Move';
    yellow.style.backgroundColor = 'yellow';
}else if(signalColor.toUpperCase() === 'green'.toUpperCase()){
    green.innerText = signalColor;
    greenMess.innerText = 'Move now';
    green.style.backgroundColor = 'green';
}

}

var checkFuel = prompt("Enter Remaining Fuel of your car");
if(checkFuel <= 0.25){
    console.log("Please refill the fuel in your car");
}

var a = 4;
if(++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if(b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if(c++ === 13){
    alert("condition 1 is true")
}
if(c === 13){
     console.log("Condition 2 is true");
}
if(++c < 14){
    alert('condition 3 is true');
}
if(c === 14){
    alert('condition 4 is true');
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === materialCost + laborCost){
    alert("The cost equals");
}

if(true){
    alert("True");
}
if(false){
    alert("False");
}

    if("car" < "cat"){
        alert("car is smaller than cat");
    }


var sub1 = Number(prompt("Enter First Subject Marks"));
var sub2 = Number(prompt("Enter Second Subject Marks"));
var sub3 = Number(prompt("Enter third subject marks"));
var totalMarks = Number(prompt("Enter Total Marks"));
var marksObtain = sub1 + sub2 + sub3;
var parcentage = totalMarks / 100 * marksObtain;
var grade;
var remarks;
if(parcentage >= 80){
    grade = "A-One";
    remarks = "Excellent";
} else if(parcentage >= 70){
    grade = "A";
    remarks = "Good";
}else if(parcentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}else if(parcentage < 60){
    grade = "Fail";
    remarks = "Sorry";
}


document.write("<h2>Marks Sheet</h2> <br> <br>");
document.write(`Total Marks : ${totalMarks} <br>`);
document.write(`Marks Obtain : ${marksObtain} <br>`)
document.writeln(`Parcentage :${parcentage}  <br>`);
document.write(`Grade : ${grade} <br>`);
document.write(`Remarks : ${remarks} <br>`);

var secNumber = 7;
var getNum = Number(prompt("Guess Number"));
if(getNum === secNumber){
   console.log("Bingo! Correct Answer");
}else{
  console.log("Close enough to the correct answer");
}

var checkDivisible = Number(prompt("Enter a number to check wether it is divisble by 3 or not."));
if(checkDivisible % 3 === 0){
    console.log(`${checkDivisible} is divisible by 3`);
}else{
    console.log(`${checkDivisible} is not divisible by 3`)
}

var oddOrEven = Number(prompt("check number wether it is odd or even"));
if(oddOrEven % 2 === 0){
    console.log(`${oddOrEven} is Even Number`);
}else{
    console.log(`${oddOrEven} is Odd number`);
}

var temp = Number(prompt("Enter Temprature as celius like 40,32"));
if(temp > 40){
    console.log('it is too hot outside');
}else if(temp > 30){
    console.log('The weather today is normal');
}else if(temp > 20){
    console.log("Today's Weather is cool");
}else if(temp > 10){
    console.log("OMG! Today weather is so cool");
}

  //CALCULATOR:
  function calcula(data){
        let input = document.querySelector(".inp");
        if(data === "="){
            var exp = input.value;
            var calculation = eval(exp);
            input.value = calculation;
            
        }else if(data === "AC"){
            input.value = '';
        }else{
            input.value += data;   

        }
  }