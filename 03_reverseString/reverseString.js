const reverseString = function (string) {
    const sizeOfString = string.length;
    let newString = "";
    for (let i = sizeOfString - 1; i >= 0; i--)
        newString += string[i];
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
