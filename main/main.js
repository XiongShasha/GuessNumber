/**
 * Created by xiongshasha on 17-7-14.
 */
'use strict';

function printFigure(systemInputs,userInputs){
   let countA = 0, countB = 0;
   userInputs=userInputs.split('');
   userInputs.map(function(userInput){
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
}