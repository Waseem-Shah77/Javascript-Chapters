var num = 9;
var guessNum = Math.floor(Math.random() * 10 + 1);
console.log(guessNum);
if(num === guessNum){
    alert("Congratulation You guessed right number");
}else{
    alert("You guessed wrong number try again");
}