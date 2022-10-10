//Find the total quantity from an array of objects

function qunatityCount(params) {
    let result = 0
    for (const element of params) {
        const myQuantity = element.quantity
        result = result + myQuantity
    }
    return result
}
const resultOutside = qunatityCount([
    { name: 'l', age: 40, quantity: 5 },
    { name: 'l', age: 40, quantity: 7 },
    { name: 'l', age: 40, quantity: 9 },
    { name: 'l', age: 40, quantity: 10 },
    { name: 'l', age: 40, quantity: 15 },
    { name: 'l', age: 40, quantity: 20 }
])
console.log(resultOutside)