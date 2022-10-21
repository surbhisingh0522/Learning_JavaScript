 let singleQuotes='Single quotes ki string';
// let doubleQuotes="Double quotes ki string";
// console.log(singleQuotes);
// console.log(doubleQuotes);
// let char=singleQuotes.charAt(4);
// let ascii=singleQuotes.charCodeAt(4);
// let substr=singleQuotes.substring(2,8);
// console.log(substr);
// console.log(char);
// console.log(ascii);

//SPLIT, JOIN
let arrStr=singleQuotes.split("i");
console.log(arrStr);
let str=arrStr.join("$");
console.log(str);

//TRIM -> removes spaces from start and end
