
const printArray = function (arr) {

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

printArray([1, 2, 3, 4, 5, 6, 7, 8, 9])


const printArray2 = function (arr) {
    arr.forEach(el => console.log(el));
    return arr;
}

console.log("Returned:", printArray2([1, 2, 3, 4, 5]));