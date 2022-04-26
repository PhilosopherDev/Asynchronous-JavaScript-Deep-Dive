"use strict";


let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};


asyncFunction().then((data) => {
    console.log(data);
});

asyncFunction2().then((data) => {
    console.log(data);
});