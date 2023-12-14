// console.log("start of the scripts....");

// setTimeout(function () {
//   console.log("First timeout Completed");
// }, 1000);

// console.log("end of script...");

// const fetchData = (callback) => {
//   setTimeout(() => {
//     let data = { name: "Joseph", age: 30 };
//     callback(data);
//   }, 2000);
// };

// fetchData(function (data) {
//   console.log(data);
// });

// console.log("data is being fetched...");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello from the promise");
//   }, 2000);
// });
// console.log(myPromise);

// fetch("https://api.github.com/users/JoseOgam")
//   .then((response) => response.json())
//   .then((data) => {
//     try {
//       //processing received data
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   })
//   .catch((error) => console.log(error));

// const performOperation = (a, b, operation) => {
//   return operation(a,b)
// }

// let results = performOperation(5, 10, addNmbers)
// console.log(results)

// function callbackFunction() {
//   console.log("I am  a callback function");
// }

// // higher order function
// function higherOrderFunction(func) {
//   console.log("I am higher order function");
//   func();
// }

// higherOrderFunction(callbackFunction);

// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (b > a) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }
