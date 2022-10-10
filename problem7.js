function isEqualArray(params1, params2) {
    const firstLength = params1.length
    const secondLength = params2.length
    if (firstLength != secondLength) {
        return false
    }
    for (let i = 0; i < params1.length; i++) {
        const firstArrayElement = params1[i]
        const secondArrayElement = params2[i]
        if (firstArrayElement != secondArrayElement) {
            return false
        }
    }
    return true
}
const resultOutside = isEqualArray([4, 5, 6], [4, 5, 6])
console.log(resultOutside)