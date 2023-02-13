let a ;
let b = 100;
let c = 1;
for(a = 1 ; a <= b ; a += 1) {
  
  if(a % 3 == 0 && a % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (a % 3 == 0) {
    console.log("Fizz");
  }
  else if(a % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
}
      
