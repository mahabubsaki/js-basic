function calculateAverage(params1) {
    const values = Object.values(params1)
    let result = 0
    for (const product of values) {
        result = result + product
    }
    const average = result / values.length
    return average

}
const resultOutside = calculateAverage({
    bangla: 10,
    english: 15,
    math: 18,
    physics: 25
})
console.log(resultOutside)