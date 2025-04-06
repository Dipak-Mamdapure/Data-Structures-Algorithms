

const findMax = (...arr) => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
}

findMax(1, 5, 6, 3, 80, 34, 88, 22, 11)

const findMin = (...arr) => {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min)
}

findMin(10,1, 5, 6, 3, 80, 34, 88, 22, 11)

const findMinMax = (...arr) => {
    let min = arr[0], max= arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } 
        if(arr[i] >max){
            max= arr[i]
        }
    }
    console.log("min value : "+min+" & "+"Max value: "+max)
}

findMinMax(10,1, 5, 6, 3, 80, 34, 88, 22, 11)