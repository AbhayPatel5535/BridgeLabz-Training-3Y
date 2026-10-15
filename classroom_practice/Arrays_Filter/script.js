//----------------------------15-10-2026-----------------------------
// let result = 10 - "4";
// console.log(result); //6
// console.log(typeof result); //number

// let result2 = "Value is" + true;
// console.log(result2); //Value is true
// console.log(typeof result2); //string

// //Explicit Conversion
// let strNumber1 = "123";
// let num1 = Number(strNumber1);
// console.log(num1, typeof num1); //123 number

// let strNumber2 = "45.67";
// let num2 = parseFloat(strNumber2);
// console.log(num2, typeof num2); //45.67 number

// //Number to String
// //Explicit Conversion
// let number1  = 100;
// let str1 = String(number1);
// console.log(str1, typeof str1); //100 string

// //Implicit Conversion
// let number2 = 250;
// let str2 = number2 + "";
// console.log(str2, typeof str2); //250 string

// //Boolean to Number
// let bool1 = true;
// let num3 = Number(bool1);
// console.log(num3, typeof num3); //1 number

// //Function Declaration to Sum
// function ad(a,b){
//     return a+b;
// }
// console.log(ad(5,10)); //15

// //Arrow Function
// let add = (a,b)=>{
//     return a+b;
// }
// console.log(add(5,10)); //15

// //Function Expression
// let addd = function(a,b){
//     return a+b;
// }
// console.log(addd(5,10)); //15

// //Higer Order Function
// function calculate(a,b,fun){ //Jo andar fun pass kra hai usko call back function bolte hai and (a,b) are arguments
//     return fun(a,b);
// }

// let add = function(a,b){
//     return a+b;
// }
// let mul = function(a,b){
//     return a*b;
// }
// function calculate(a,b,fun){ //Jo andar fun pass kra hai usko call back function bolte hai and (a,b) are arguments
//     return fun(a,b);
// }
// let sum = calculate(5,10,add);
// let product = calculate(5,10,mul);
// console.log(sum); //15
// console.log(product); //50


// let arr = [1,2,3,4,5,6];

// let fun = (x)=>{
//     return x*2;
// }

// let result = arr.map(fun);
// console.log(result); // [2, 4, 6, 8, 10, 12]

// let res = arr.filter((x)=>{
//     return x%2==0;
// })
// console.log(res); // [2, 4, 6]


//Filter fruit start with a or A;
let arr1 = ["apple","mango","banana","Apple","apple"];
let res1 = arr1.filter((x)=>x.toLowerCase()!=="apple");
console.log(res1); // ["mango", "banana"]

//Filtr the age >18
let arr2 = [12, 17, 19, 21, 15, 30];
let res2 = arr2.filter((x)=>x>18);
console.log(res2); // [19, 21, 30]

//Filter the fruit which has length >5
let arr3 = ["apple","mango","banana","kiwi","grapes"];
let res3 = arr3.filter((x)=>x.length>5);
console.log(res3); // ["banana", "grapes"]