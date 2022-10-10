function findUniqueSum(params) {
    let result = 0
    for (const item of params) {
        if (params.indexOf(item) == params.lastIndexOf(item)) {
            result = result + item
        }
    }
    return result
}
const resultOutside = findUniqueSum([2, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 8, 8])
console.log(resultOutside);