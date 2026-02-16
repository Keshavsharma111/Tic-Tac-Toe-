// function sytanx
// function add(a, b) {
//   console.log(a + b); 
// }

// add("2","3");// returns 5


// Closures  FUNTION OR ITS LIKE JUST NESTED LOOP


// function outer(){
//     let count =0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }


// let counter= outer();
// counter();
// counter();







// //set interval and out

//  setInterval (()=>{
//    console.log("print after 2sec");
//  },2000);














// let count = 0;

// const intervalId = setInterval(()=>{
//     console.log("keshav sharma sde");
//     count++;
    
//     if(count ===5){
//         clearInterval(intveralId);
//         console.log("task completed");
//     }

// }
// , 1000);





// count vowels in string use a function//
// function countvowels(str){
//     let count=0;
//     for (const char of str){
//         if(
//             char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"
//         ){
//             count++;
//         }
//     }
//     console.log(count);       //or    return count;
// }

////////////////////////FOREACH USES IN Array
// let arr=["pune","delhi","mumbai"];
// arr.forEach((val)=>{
//     console.log(val);
//     console.log(val.toUpperCase());
// });

// let a=5;
// a+=a++ + ++a; console.log(a);






// function saymyname(){
//     console.log("k");
//       console.log("e");
//         console.log("s");
//           console.log("h");
//             console.log("a");
//               console.log("v");
// }
// saymyname();



// /////////////////////////////// global scope and local scope ex
//  let a=100;
 //var b=30;
 //const c=40;
// if(true) {
//    let a=10;
//  var b=30;
//  const c=40;
//  console.log(a);

// }
// console.log(a);
//console.log(b);
//console.log(c);


// const addtwonum=(num1,num2)=> (num1+num2)     // ARROW FUNCTION                     
// console.log(addtwonum(3,4))



// const addtwonum=(num1,num2)=> {
//   return (num1+num2)}

// console.log(addtwonum(3,4))



// const mynums =[1,2,3,4,5,6,7,8,9]                          ///////FILTER USES IN JS////////////
// const newnums=mynums.filter((num)=>{  return num>4

// })
// console.log(newnums)




function order(cb) { 
console.log("1"); 
cb(); 
console.log("3"); 
} 
order(() => console.log("2")); 