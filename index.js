let i = 0;
 for (let i = 0; i <= 1000; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
     }
    else if(i % 3 === 0){
      console.log ("Fizz");
     }
   else if (i % 5 === 0) {
       console.log("Buzz");
     }
   
  else console.log(i) 
 }
