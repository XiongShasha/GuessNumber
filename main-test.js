'use strict';

const sinon = require('sinon');
const readlineSync = require('readline-sync');
const guessNumberModule = require('./main');

function shouldGet0A0BWhenInputGuessedNumIsEqualToRandomNum() {
    const systemRandomNumStr = sinon.stub(guessNumberModule, 'randNumStr').returns('1234');
    const inputGuessedNumStr = sinon.stub(readlineSync, 'question').returns('5678');

    const result = guessNumberModule.guessNumber();
    console.log(result === '0A0B' ? 'shouldGet0A0BWhenInputGuessedNumIsEqualToRandomNum is passed' : 'shouldGet0A0BWhenInputGuessedNumIsEqualToRandomNum is not passed');
    inputGuessedNumStr.restore();
}
shouldGet0A0BWhenInputGuessedNumIsEqualToRandomNum();




