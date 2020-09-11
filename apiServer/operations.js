const Big = require('big.js');

module.exports.sum = (number1, number2) => {
    try {
        const n1 = Big(number1);
        const n2 = Big(number2);
        return {result: n1.plus(n2)};
    } catch(e) {
        return {error: e.message.replace('[big.js] ', '')};
    }
};

module.exports.subtraction = (number1, number2) => {
    try {
        const n1 = Big(number1);
        const n2 = Big(number2);
        return {result: n1.minus(n2)};
    } catch(e) {
        return {error: e.message.replace('[big.js] ', '')};
    }
};

module.exports.multiplication = (number1, number2) => {
    try {
        const n1 = Big(number1);
        const n2 = Big(number2);
        return {result: n1.times(n2)};
    } catch(e) {
        return {error: e.message.replace('[big.js] ', '')};
    }
};

module.exports.division = (number1, number2) => {
    try {
        const n1 = Big(number1);
        const n2 = Big(number2);
        return {result: n1.div(n2)};
    } catch(e) {
        return {error: e.message.replace('[big.js] ', '')};
    }
};
