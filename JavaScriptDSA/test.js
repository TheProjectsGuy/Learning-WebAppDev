const nodupes = (nums) => {
    var res = []
    for (let v of nums) {
        if (!res.includes(v)) {
            res.push(v)
        } else {
            console.log(`${v} in ${res}`)
        }
    }
    return res
}

console.log(nodupes([2, 1, 2, 5, 3, 2, 7]))