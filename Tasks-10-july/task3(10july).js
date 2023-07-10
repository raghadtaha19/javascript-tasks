// 1. Write a JS code to print numbers from 1 to 10
let i ;
for (i=1; i<=10 ; i++) {
    console.log ("Number is ",i);
}

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/

   var arr = [13,23,12,45,22,48,66,100];
   for (i=0 ;i<(arr.length-1) ;i++){
   if (arr[0]%2==0){
    console.log("the number is even", arr[i] );
   }
   else {
    console.log("the number is odd");
   }
}


/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
let n = 8;
let num ;
for (let i = 1; i <= n; i++) {
  
  // printing star
  for (let k = 0; k < i; k++) {
    num += i;
  }
  num += "\n";
}
console.log(num);

 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
// let x = "don't know why";
// function Check (x);
// for (i = 0; i < x.length; i++) {
//     var ascii = x[i];
//     if (ascii==121) {
//         console.log("Yes");
//     }
//     else {
//         console.log("NO");
//     }
// }
