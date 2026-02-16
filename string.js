// let str="keshav";
// console.log(str[1],str.length)



// TEMPLATE LITERALS //
// let obj ={
//     item: "pen",
//     price:10,
// };
// let output =`the cost of ${ obj.item} is ${obj.price}rupes`;
// console.log(output)



//STRING METHOD // UPPERCASE LOWERCASE TRIM(REMOVE SPACE)
// let str="          keshav sharma           ";
// console .log(str.toUpperCase());
// console .log(str.toLowerCase());
// console .log(str.trim());// ye start ,end ke space hata deti hai 


// str1="keshav";
// str2="sharma";
// console.log(str1.slice(1,5));
// console.log(str1.concat(str2));
// console.log(str2.replace("a","k"));
// console.log(str2.replaceAll("a","k"));






//q1 name with length

let fullname = prompt("enter a fullname without sapce");
let username = "@"+ fullname + fullname.length;
console.log(username);
