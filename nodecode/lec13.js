const fetchData= new Promise((resolve,reject) => {
    const success = true;
    if(success){
        resolve("Data fetched  ");
    }else{
        reject("Error fetching data");
    }
});


Promise.resolve(10)
.then ((x) => {
    x+10;
    console.log(x);
    return x + 20; 
   
})
.then(console.log);