//Find the total count of even numbers from an array
function evenCount(params1) {
    let result = 0
    for (const number of params1) {
        if (number % 2 == 0) {
            result = result + number
        }
    }
    return result
}
const resultOutside = evenCount([2, 3, 7, 6, 8])
console.log(resultOutside);
