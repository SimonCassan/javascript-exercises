const reverseString = function (string) {
    const sizeOfString = string.length;
    let newString = "";
    for (let i = sizeOfString; i >= 0; i--)
        newString += string[i];
};

// Do not edit below this line
module.exports = reverseString;
