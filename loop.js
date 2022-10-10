// const array = [4, 5, 3, 2, 9, 1, 8, 9]
// let result = 1
// for (const item of array) {

//     result = result * item
// }
// console.log(result)
// for (let i = 0; i < array.length; i++) {

// }
//for(initial value;condition;increament){}

const obj = {
    bangla: 10,
    english: 15,
    math: 18,
    physics: 25
}
let result = 0
for (const property in obj) {
    const value = obj[property]
    result = result + value
}
console.log(result);