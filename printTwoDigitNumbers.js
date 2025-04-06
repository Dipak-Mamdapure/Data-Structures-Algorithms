
function printTwoDigitNumbers(...arr){
    for (let i=0; i<arr.length;i++){
        if(arr[i]>9 && arr[i]<100){
            console.log(arr[i])
        }
    }
}

printTwoDigitNumbers(1,5,6,22,33,9,8,100,56)



function printPositiveNumbers(...arr){
    for(let i=0; i<arr.length;i++){
        if (arr[i]>0){

            console.log(arr[i])

        }
    }
}


printPositiveNumbers(1,5,-6,-22,33,-9,8,-100,-56)


