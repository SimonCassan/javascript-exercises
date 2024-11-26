const sumAll = function (...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof (args[i]) == number) {
            sum += args[i];
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
