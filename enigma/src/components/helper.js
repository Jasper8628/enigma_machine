const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
const newArray = []
// while (numArray2.length > 0) {
//     for (let i = 0; i < 26; i++) {
//         let index = Math.floor(Math.random() * numArray2.length)
//         const random = numArray2.splice(index, 1)
//         newArray.push([i, random[0]])
//     }
// }
const linkage = ['15', '22', '19', '25', '17', '23', '21', '18', '20', '16', '13', '24', '14', '10',
    '12', '0', '9', '4', '7', '2', '8', '6', '1', '5', '11', '3'];
for (let letter of linkage) {
    newArray.push(parseInt(letter))

}
let checker = true
while (checker) {
    const counter = []
    for (let i = 0; i < numArray.length; i++) {
        if (typeof (numArray[i]) === 'number') {
            counter.push(1)
        }
    }
    if (counter.length == 0) {
        checker = false
    } else {
        const random1 = Math.floor(Math.random() * 25);
        const random2 = Math.floor(Math.random() * 25);
        if (random1 !== random2
            && typeof (numArray[random1]) !== 'string'
            && typeof (numArray[random2]) !== 'string') {
            [numArray[random1], numArray[random2]] = [numArray[random2].toString(), numArray[random1].toString()]

            console.log(numArray)
        } else {
            console.log(numArray)
        }
    }


}