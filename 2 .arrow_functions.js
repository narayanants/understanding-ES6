/**
 * Arrow Functions:
 * ----------------

 	Avoid uisng var
 	Make constants using const
 */

'use strict';

function calculateRadius1(r) {
    var PI = 3.14;
    return PI * r * r;
}


console.log(calculateRadius1(7));


/**
 * Easy way to make functions
 */

let calculateRadius2 = (r) => {
    const PI = 3.14;
    return PI * r * r;
};


/*  */

let calculateRadius3 = r => 3.14 * r * r;


console.log(calculateRadius1(7));
console.log(calculateRadius2(8));
console.log(calculateRadius3(10));
