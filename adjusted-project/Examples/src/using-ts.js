"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
//addding types here coz if somehow the params were passed as strings they'll be concat ed instead of matematically added
//so add('2',5) would yield the string 25
//TS errors can be caught development not in browsers as browser doesn't have support TS build in
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });
//fixing type error in Typescript which otherwise wouldn't be possible in JS
//# sourceMappingURL=using-ts.js.map