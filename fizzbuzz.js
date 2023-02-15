for (let i = 1; i <= 1000; i++) {

    // múltiplos de 3 y de 5 se imprimirá FizzBuzz
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    //múltiplos de 3 = Fizz
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // múltiplos de 5 = Buzz
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // el resto numero
    else {
        console.log(i)
    }
}