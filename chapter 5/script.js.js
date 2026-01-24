let a = 5;
let b = 10;
let addi = a + b;
let subt = a - b;
let multi = a * b;
let modu = a % b;
document.writeln(`addition of ${a} and ${b} is ${addi} <br>`);
document.writeln(`subtraction of ${a} and ${b} is ${subt} <br>`);
document.writeln(`multiplication of ${a} and ${b} is ${multi} <br>`);
document.writeln(`modulus of ${a} and ${b} is ${modu} <br>`);
var ques;
ques = "value after variable declaration is : ?? <br>";
document.writeln(ques);

var num = 10;
document.writeln("initialize value : " + num  +" <br>");
num++;
document.writeln("value after increment is " + num + " <br>");
num += 7;
document.writeln("value after additon is " + num + " <br>");
num--;
document.writeln("value after decrement is " + num + " <br>");
var rem = num % 3;
document.writeln("The reminder is : " + rem +  "<br>");
var und;
document.writeln("Value after variable declaration is " + und + "<br>");
und = 5;
document.writeln("initialize value : " + und + "<br>");
und++;
document.writeln("Value after increment is :" + und + "<br>");
und += 7;
document.writeln("Value after addition is : " + und + "<br>");
und--;
document.writeln("Value after decrement is " + und + "<br>");
var newrem = und % 3;
document.writeln("The reminde is : " + newrem + "<br>");
var perTicket = 600;
var calPrice = perTicket * 5;
document.writeln("Total cost to buy 5 tickets to a movie is : " + calPrice + "PKR <br> <br> <br> <br>");

document.writeln("<h1>Table of 6 <br> <br>");
var Table = 6;
for(var i = 1; i <= 10; i++){
    var createTable = 6 * i;
    document.writeln(`6 x ${i} = ${createTable} <br>`);
}

var c = 32;
var conToFahrenheit = (c * 9/5) + 32;
document.writeln("F:" + conToFahrenheit + "<br>");

var f = 67.6;
var conToCelsius = Math.round((f - 32) * 5/9);
document.writeln("C:" + conToCelsius + "<br> <br>");

var priceItem1 = 430;
var priceItem2 = 510;
var quantityItem1 = 3;
var quantityItem2 = 1;
var shippingCharges = 150;
document.writeln("Shopping Cart");
document.writeln("Price of item 1 is : " + priceItem1 + "<br>");
document.writeln("Price of item 2 is : " + priceItem2 + " <br>");
document.writeln("Quantity of item 1 is : " + quantityItem1 + "<br>");
document.writeln("Quantity of item 2 is : " + quantityItem2 + "<br>");
document.writeln("Shipping Charges is : " + shippingCharges + "<br> <br>");
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.writeln("Total Cost of Your Order is : " + totalCost + "<br> <br> <br> <br>");

var totalMarks = 1100;
var ObtainMarks = 551;
var per = Math.round(ObtainMarks / totalMarks * 100);

document.writeln('Total Marks : ' + totalMarks + "<br>");
document.writeln("Obtain Marks : " + ObtainMarks + "<br>");
document.writeln(" Percentage : " + per + "% <br>");


var usDollars = 10;
var saudiRiyal = 25;
var convertToPakistani = (usDollars * 104.80) + (saudiRiyal * 28);
document.writeln(`<h1>Currency in PKR</h1> <br>`);
document.write(`Total Currency in PKR : ${convertToPakistani} <br>`);


var num = 10;
num = (num + 5) * 10 / 2;
document.write("Calculation : ", num + "<br>");

document.write("<h1>The Age Calculator</h1>");
var currentYear = new Date().getFullYear();
var birthYear = Number(prompt("Enter Your Birth year to find out your age"));
function age(currentY, birthY){
    guessAge = currentY - birthY;
    return guessAge;
}
var res = age(currentYear, birthYear);
document.write(`Current Year : ${currentYear} <br>`);
document.writeln(`Birth Year : ${birthYear} <br>`);
document.write(`Your age is : ${res} <br>`);

document.write("<h1>The Geometrizer</h1>");
var radius = 5;
var pi = Math.PI;
var circumference = 2 * pi * radius;
document.write("Radius of a circle is : " + radius + "<br>")
document.write("The circumference is : " + circumference + "<br>")
document.write("The Area of a circle : " + circumference.toFixed(3) + "<br>");

document.write("<h1>The Life Time Supply Calculator</h1>");
var snacks = "Chocolate chips";
var currentAge = 16;
var maximumAge = 65;
var amountPerDay = 6;
var snackCal = (maximumAge - currentAge) * 6;
document.write(`You will need ${snackCal} ${snacks} to last you until the ripe old age of 65 <br>`);














