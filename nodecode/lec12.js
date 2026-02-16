// console.log("A");
// console.log("B");
// console.log("C");

//call stack,event loop, callback
// const  a= () => {
//   b();
//   console.log("a");
// };

// const b= () => {
//   c();
//   console.log("b");
// };

// const c= () => {
//   console.log("c");

// };

// a();




//dusra code        

// const greet = () => {
//   sayName();
//   console.log("Hello!");
// };

// const sayName = () => {
//   sayRole();
//   console.log("My name is Developer");
// };

// const sayRole = () => {
//   console.log("I am a programmer");
// };

// greet();


// const  a= () => { 



//   setTimeout(() => {
//     console.log("setTimeout 1");
//   }, 0);
//   setTimeout(() => {
//     console.log("setTimeout2");
//   }, 0);
//   b();
//   console.log("a");
// };
// Promise.resolve().then(() => console.log("promise1"));

// const b= () => {
//   console.log("b");
//   c();
// };

// const c= () => {
//   console.log("c");
// };

// a();


const fetchData = (a,b,cb) => {
    cb(`${a+b} Data Initiated`);
};

const internalFunction = (data) => {
    console.log(" data :",data);

 }; 

 fetchData(1,2, internalFunction);