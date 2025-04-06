//Prints even numbers using a traditional for loop
function printEvensWithFor(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}
printEvensWithFor([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Prints even numbers using Array.prototype.forEach
function printEvensWithForEach(arr) {
    arr.forEach(el => {
        if (el % 2 === 0) {
            console.log(el);
        }
    });
}
printEvensWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//One-liner version using arrow function and short-circuiting
const printEvensOneLiner = arr => arr.forEach(el => el % 2 === 0 && console.log(el));

printEvensOneLiner([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//Prints odd numbers using a traditional for loop
function printOddsWithFor(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
}
printOddsWithFor([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Prints odd numbers using Array.prototype.forEach
function printOddsWithForEach(arr) {
    arr.forEach(el => {
        if (el % 2 != 0) {
            console.log(el);
        }
    });
}
printOddsWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//One-liner version using arrow function and short-circuiting
const printOddsOneLiner = arr => arr.forEach(el => el % 2 != 0 && console.log(el));

printOddsOneLiner([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//Prints odd numbers using a traditional for loop
function printEvenOddsWithFor(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log("Even Number is : "+arr[i]);
        }else{
            console.log("Odd Number is : "+ arr[i]);
        }
    }
}
printEvenOddsWithFor([1, 2, 3, 4, 5, 6, 7, 8, 9]);
