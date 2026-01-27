var a = 10;
document.write("Result : <br>")
document.write(`The Value of a is : ${a} <br> <br>`);

document.write(`The value of ++a is : ${++a} <br>`);
document.write(`Now the value of a is : ${a} <br> <br>`);

document.write(`The value a++ is : ${a++} <br>`);
document.write(`Now the value of a is : ${a} <br> <br>`);

document.write(`The value of --a is : ${--a} <br>`);
document.write(`Now the value of a is : ${a} <br> <br>`);

document.write(`The value of a-- is : ${a--} <br>`);
document.write(`Now the value of a is : ${a} <br> <br>`);

var a = 2, b = 1;
document.write(`The value of a is ${a} <br> The value of b is ${b} <br>`);
var result = --a - --b + ++b + b--;
document.writeln(`Result is ${result} <br> <br> <br>`);


var getName = prompt("What's Your name ?");
alert(`Assalam Walikum ${getName}`);

var numForTable = Number(prompt("Enter a Number For Table"));
if (numForTable !== 0) {
  for (var i = 1; i <= 10; i++) {
    document.writeln(`${numForTable}   x   ${i} = ${numForTable * i} <br>`);
  }
}else{
  for(var j = 1; j <= 10; j++){
    document.writeln(`5  x  ${j}  =  ${j * 5} <br>`);
  }
}

var sub1 = prompt("Enter Your First Subject name ?");
var sub2 = prompt("Enter Your Second Subject name ?");
var sub3 = prompt("Enter Your third Subject name ? ");
var sub1Marks = Number(prompt("Enter Your first Subject Marks You Obtain"));
var sub2Marks = Number(prompt("Enter Your second Subject Marks You Obtain"));
var sub3Marks = Number(prompt("Enter Your third Subject Marks You Obtain"));

var totalMarksSub = 100;
var percent = sub1Marks * 100 / 100;
document.writeln("<h2>Subject Total Marks Obtain Marks Percentage</h2> <br>");
document.writeln(`${sub1}             ${totalMarksSub}    ${sub1Marks}     ${sub1Marks * 100 / 100}%<br>`);
document.writeln(`${sub2}             ${totalMarksSub}    ${sub2Marks}     ${sub2Marks * 100 / 100}%<br>`);
document.writeln(`${sub3}             ${totalMarksSub}    ${sub3Marks}     ${sub3Marks * 100 / 100}%<br>`);
document.writeln(`<b>Total : ${sub1Marks + sub2Marks + sub3Marks}  ${totalMarksSub * 3}  ${sub1Marks + sub2Marks + sub3Marks}%</b>`);










