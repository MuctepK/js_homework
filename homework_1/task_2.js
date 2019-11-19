numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
avg = array => {
    let s = 0;
    for (let value of array)
        s += value;
    return s/array.length;
}
console.log(avg(numbers));

