/*  AUTHOR: Nicolas Sims
 *  VERSION: 2.4.7
 *  CREATED: 1/9/2017
 *  PURPOSE: Create a dice roller
 */

'use strict';

class main {
    constructor() {
        setValues.readyApp();
        performFunction.rollDice();
    }
}

class setValues {
    static readyApp() {
        document.getElementById("defaultTypeDice").checked = true;
    }
}

class performFunction {
    static rollDice() {
        document.getElementById("button").addEventListener("click", () => {
            const ANSWERS = document.forms['theForm'].elements['typeDice'];
            for (let i = 0; i < ANSWERS.length; i++) {
                if (ANSWERS[i].checked == true) {
                    let typeDice = ANSWERS[i].value;
                    console.log("typeDice=" + typeDice);
                    let numberDice = Number(document.getElementById("numberDice").value);
                    console.log("numberDice=" + numberDice);
                    let result = typeDice * numberDice;
                    console.log("result=" + result);
                }
            }
        }, false);
    }
}

window.onload = function() {
    new main();
};