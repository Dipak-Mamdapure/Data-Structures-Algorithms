
function countEvenNumbers(...arr){
    let counter=0
    for (let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            counter++
        }
    }

    console.log(counter)
}


//countEvenNumbers(5,45,2,6,38,56,43,8,7,9,10)
countEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8)