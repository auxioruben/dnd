'use strict';

module.exports = function (dice) {
    const re = /(\d+)d(\d+)\+(\d+)/;
    let result = re.exec(dice);
    if (result) {
        const numDice = Number(result[1]);
        const numSides = Number(result[2]);
        const modifier = Number(result[3]);
        let rolls = roll(numDice, numSides);
        return {
            rolls: rolls,
            modifier: modifier,
            result: rolls.reduce((b, c) => b + c, 0) + modifier
        };
    }
    return {};
};

function roll(numDie, numSides) {
    let result = [];
    for (let i = 0; i < numDie; i++) {
        result.push(Math.floor(Math.random() * (numSides - 1)) + 1);
    }
    return result;
}
