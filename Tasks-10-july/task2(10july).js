/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let avg ;
avg = prompt("Enter Your Average from 100");
if (avg>=90 && avg<100){
    console.log ("A")

}
else if (avg>=80 && avg<=89){
    console.log ("B")
}
else if (avg>=70 && avg<=79){
    console.log ("C")

}
else if (avg>=60 && avg<=69){
    console.log("D")
}
else if (avg>=50 && avg<=59){
    console.log ("E")
}
else {
    console.log ("Fail")
}