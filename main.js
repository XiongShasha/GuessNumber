/**
 * Created by xiongshasha on 17-7-14.
 */
'use strict';

/*function printFigure(systemInputs,userInputs){
    let countA = 0, countB = 0;
    userInputs=userInputs.split('');
    userInputs.map((userInput)=>{
        if(systemInputs.indexOf(userInput)>-1)
            countB++;
    });
    for(let subscript in systemInputs){
        if(systemInputs[subscript] === userInputs[subscript]){
            countA++;
            countB--;
        }
    }
    console.log(`${countA}A${countB}B`);
}*/
//function getRand(){
    //return '123456789'.split('').sort(function(){
       // return Math.random()-0.5;
    //}).join('');
//}
const readlineSync = require('readline-sync');

function randNumStr(min, max, num) {
    let arr = [],
        t;

    function fn(i) {
        for (i; i < num; i++) {
            t = parseInt(Math.random() * (max - min + 1) + min);
            for (var k in arr) {
                if (arr[k] == t) {
                    fn(i);
                    break;
                }
            }
            arr[i] = t;
        }
    }
    fn(0);
    return arr.join('')
}

function guessNumber() {
    const systemRandomNumStr = this.randNumStr(1, 9, 4);
    const inputGuessedNumStr = readlineSync.question(`System generate random number is ${systemRandomNumStr}\nPlease input your guessed number: `);
    let totalCount = 0,
        countA = 0,
        countB = 0;
    for (let index in systemRandomNumStr) {
        if (inputGuessedNumStr.indexOf(systemRandomNumStr[index]) !== -1) {
            totalCount++;
        }

        if (inputGuessedNumStr[index] === systemRandomNumStr[index]) {
            countA++;
        }

        countB = totalCount - countA;
    }
    return `${countA}A${countB}B`;
}

module.exports.randNumStr = randNumStr;
module.exports.guessNumber = guessNumber;