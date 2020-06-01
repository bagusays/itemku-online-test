function getSelfNumber(max = 100) {
    let generators = [];
    for(let i = 0; i <= max; i++) {
        const splittingNumber = i.length != 1 ? i.toString().split("") : [i];
        let tmpResult = i;
        for(let j of splittingNumber) {
            tmpResult += parseInt(j);
        }

        generators.push(tmpResult);
    }

    let selfNumber = [];
    for(let i = 0; i < generators.length; i++) {
        if(!generators.includes(i)) {
            selfNumber.push(i);
        }
    }

    return selfNumber;
}

// The whole self-number
const selfNumber = getSelfNumber(5000);
console.log(selfNumber);

// Sum of self-number
const sumOfSelfNumber = selfNumber.reduce((a, b) => a + b)
console.log(sumOfSelfNumber);