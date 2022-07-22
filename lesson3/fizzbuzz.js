function fizz_buzz(limit) {
    if(limit % 3 === 0 && limit % 5 === 0) {
        return console.log("fizzbuzz");
    }
    if(limit % 3 === 0) {
        return console.log("fizz");
    }
    if(limit % 5 === 0) {
        return console.log("buzz");
    }
    
}

fizz_buzz(6);
fizz_buzz(10);
fizz_buzz(15);

