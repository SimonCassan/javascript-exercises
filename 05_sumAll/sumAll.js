const sumAll = function (nb1, nb2) {
    if (Number.isInteger(nb1) && Number.isInteger(nb2)) {
        if (nb1 >= 0 && nb2 >= 0) {
            if (nb1 > nb2)
                [nb1, nb2] = [nb2, nb1];
            let sum = nb1;
            let currentNb = nb1 + 1;
            while (currentNb <= nb2) {
                sum += currentNb;
                currentNb++;
            }
            return sum;
        }
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;