const sumAll = function (nb1, nb2) {
    if (nb1 > nb2)
        [nb1, nb2] = [nb2, nb1];
    let sum = nb1;
    let currentNb = ++nb1;
    while (currentNb <= nb2) {
        sum += currentNb;
        currentNb++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
