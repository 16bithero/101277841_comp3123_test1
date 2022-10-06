const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords = (mxArr) => {
    const sort = mxArr.filter((sortStrings) => typeof sortStrings === 'string')
    let check = new Promise((resolve, reject) => {
        if (sort.length != 0) {
            const filteredArr = sort.map(elem => {
                return elem.toLowerCase()
            })
            resolve(filteredArr)
        } else {
            reject("ERROR")
        }
    })
    return check
}

lowerCaseWords(mixedArray).then((success) => {
    console.log(success)
}).catch(() => {
    console.log("Rejected. No strings found in the array.")
})