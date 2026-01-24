var getData = prompt("Enter Any word To check wether it is palindrome or not ?");
var rev = "";
for(var i = getData.length - 1; i >= 0; i--){
    rev += getData[i];
}
if(getData === rev){
    console.log(getData +" is Palindrome");
}else{
    console.log(getData + ' is Not Palindrome');
}