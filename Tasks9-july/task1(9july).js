// Calculate the value of zakat 
let x=250;
let zakat=2.5/100*(250*12);
console.log(zakat);

// ِArray Task 1
// Correct the syntax error

let arr1=[1 , 7 , 9 , 45];
console.log(arr1);

let arr2=["Str" , "alex" ,"moh", "the","fox", 'over', "lazy", "dog"];
console.log(arr2);


/*
Task2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits=["Tomato","Banana","Watermelon"];
var banana =fruits.indexOf("Banana");
console.log(banana);
var tomato =fruits.indexOf("Tomato");
console.log(tomato);


/*
Task3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

const raghad= ["pasta", "pizza","basketball" , "tennis", "swimming", "Angels and Demons", "NoteBook"];
console.log(raghad);

/*
Task4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

const cars = ["Mercedes", "Volvo", "BMW" , "Toyota"];
let [first1] = cars;
console.log(first1);
// or another way

let first2=cars[1];
console.log(first2);



/*
Task5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

let last1=cars[cars.length-1];
console.log(last1);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9];
array.push(10);
array.shift(1);
array.shift(2);
array.shift(3);
array.unshift(1);
array.splice(1,0,3);
array.splice(2,0,4);
array.splice(3,0,6);
array.splice(4,0,8);

console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5];
array2.unshift(0);
array2.pop();
array2.pop(3);
array2.splice(2,0,7)

console.log(array2);



/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

const num = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
num.sort(function(a, b) {return a-b});
console.log(num);







