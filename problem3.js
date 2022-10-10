function filterNumber(params) {
    const initial = []
    for (const item of params) {
        if (isNaN(item)) {
            continue
        } else {
            if (item > 1) {
                initial.push(item)
            }
        }
    }
    return initial
}

const resultOutside = filterNumber([4, 'sd', { age: 20 }, 'sd', true, false, 5, 8, 9])
console.log(resultOutside);