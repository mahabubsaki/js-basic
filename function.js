function main(params1, params2) {
    const sum = params1 + params2
    const multiplyFunction = multiply(sum)
    return multiplyFunction
}
function multiply(params1) {
    const newResult = params1 * 50
    return newResult
}
const result = main(10, 5)
console.log(result);