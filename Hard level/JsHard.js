// function foo1() {
//     return {
//         bar: "hello"
//     };
// }
// console.log(foo1()); // { bar: 'hello' }

// console.log(12 + 5 + "22"); // 1722
// console.log(12 + "22" + 5); // 12225

// console.log(0 == false); // true
// console.log(0 === false); // false


// // copy object - 3 ways
// const person = { name: "ishi", age: 22 };
// console.log(person);
// // using spread operator
// let copy1 = {...person };
// console.log(copy1);
// // Object.assign()
// let copy2 = Object.assign({}, person);
// console.log(copy2);
// // using JSON
// let copy3 = JSON.parse(JSON.stringify(person));
// console.log(copy3);


// const a; // No initialization of const variable gives syntax error

// (function() {
//     var a = b = 3;
// })();

// console.log("a defined?" + (typeof a !== 'undefined')); // a defined? false
// console.log("b defined?" + (typeof b !== 'undefined')); // a defined? true