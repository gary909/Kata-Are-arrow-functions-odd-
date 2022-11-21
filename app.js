function odds(values) {
    let myArr = [];
    for (i = 0; i < values.length; i++) {
        if (values[i] % 2 == 1) {
            myArr.push(values[i]);
        }
    }
    return myArr;
}

console.log(odds([])); //[]
console.log(odds([2, 4, 6])); //[]
console.log(odds([1, 3, 5])); //[1, 3, 5]
console.log(odds([1, 2, 3, 4, 5, 6])); //[1, 3, 5]