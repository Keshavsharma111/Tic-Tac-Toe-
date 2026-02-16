console.log(1);
const getconsole=() =>{
    console.log("2");
    setTimeout(()=>
    {
        console.log("3");
    },2000);
};
getconsole();
for(let i =0;i<=5e9;i++);
console.log("4");
 



 