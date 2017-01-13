/*  AUTHOR: Nicolas Sims
 *  VERSION: 2.4.7
 *  CREATED: 1/9/2017
 *  PURPOSE: Create a dice roller
 */

'use strict';

class main {
    constructor() {
        setValues.readyApp();
    }
}

class setValues {
    static readyApp() {
        document.getElementById("defaultTypeDice").checked = true;
    }
}

window.onload = function() {
    new main();
};