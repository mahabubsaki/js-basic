// const myName = 'saki'
// const myAge = 20
// const mySubject = 'Math'
// const saki = {
//     name: 'saki',
//     age: 20,
//     subject: 'Math'
// }

// console.log(saki.subject)
// 1) Dot notaion
// 2) dynamic
// 3) variable
// Method
// 1)Object.keys
// 2)Object.values
// 3)Object.entries

const obj = {
    bangla: 10,
    english: 15,
    math: 18,
    physics: 25
}
let result = 0;
const array = Object.values(obj)
for (let index = array.length - 1; index >= 0; index--) {
    const number = array[index]
    result = result + number
}
console.log(result);


