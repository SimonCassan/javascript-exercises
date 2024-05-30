const repeatString = function (str, nb) {
    let resultstr = '';
    if (nb < 0)
        return 'ERROR';
    for (let i = 0; i < nb; i++) {
        resultstr = resultstr + str;
    }
    return resultstr;
};

// Do not edit below this line
module.exports = repeatString;
