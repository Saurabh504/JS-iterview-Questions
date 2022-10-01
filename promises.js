const myFirstPromise = new Promise((resolve, reject) => { 
  const condition = true;   
  if(condition) {
       setTimeout(function(){
           resolve("Promise is resolved!"); // fulfilled
      }, 300);
  } else {    
      reject('Promise is rejected!');  
  }
});

myFirstPromise
.then((successMsg) => {
    console.log("scdccdc "+successMsg);
})
.catch((errorMsg) => { 
    console.log(errorMsg);
});