const removeFromArray = function (array, ...args) {
    let newArray = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
