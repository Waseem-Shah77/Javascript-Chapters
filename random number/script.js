var num = 11;
var guessNum = Number(prompt("Guess Number"));
if(num != guessNum){
    while(guessNum != num){
          guessNum = Number(prompt("You Guesses Wrong Try Again"));   
}
    if(num === guessNum){
        alert("You Guessed Right Congratulation");
    }
}
