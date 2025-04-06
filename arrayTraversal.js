
const arrayTraversal = function (...arr) {

    for (let index = arr.length - 1; index >= 0; index--) {
        console.log(arr[index])
    }

}

arrayTraversal(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)


function reverseString(str) {

    let temp = ""
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    console.log(temp)
}


reverseString("javascript")