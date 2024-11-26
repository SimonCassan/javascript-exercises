const removeFromArray = function (array, nb) {
    let newArray = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== nb) {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
