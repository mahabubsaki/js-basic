function reverseArray(params) {
    const initialArray = []
    for (let i = params.length - 1; i >= 0; i--) {
        const element = params[i]
        initialArray.push(element)
    }
    return initialArray
}
const result = reverseArray([2, 3, 4, 5, 6, 7, 8])
console.log(result);
