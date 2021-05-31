const sum = (array) => {
    let sumNumbers = 0;
    array.forEach((num) => {
        if (typeof num !== 'object')
            sumNumbers += num;
        else sumNumbers += sum(num)
    })
    return sumNumbers

}

const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2, [2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]

console.log(sum(numbers));