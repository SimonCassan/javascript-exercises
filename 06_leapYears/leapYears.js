const leapYears = function (year) {
    if (Number.isInteger(year)) {
        // if year divisible by 0 OR (year not divisible by 100 AND year 
        if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0))
            return true;
        return false;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = leapYears;