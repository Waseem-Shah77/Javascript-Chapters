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
var result = --a - --b + ++b + b--; 
document.write(`The value of a is ${a} <br> The value of b is ${b}`)