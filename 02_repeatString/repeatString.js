const repeatString = function (string, nb) {
    if (nb < 0)
        return "ERROR";
    else {
        let returnString = "";
        for (let i = 0; i < nb; i++)
            returnString += string;
        return returnString;
    }
};

// Do not edit below this line
module.exports = repeatString;
