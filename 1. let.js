/**
 *  var VS let
 * -----------
 *  * var has lot of scoping issues like accessing inside if statements.
 *  * let has made those rules very simple.
 *  * "Block" is just curly braces
 * 
 *  
 *  
 */

'use strict';


let movie1;
movie1 = 'Good will hunting';

function theHundred() {
    let movie1 = 'The hundred';
    return movie1;
}
console.log(movie1);
console.log(theHundred());
console.log(movie1);

    let movie; //  declaring a variable. Reserves some memory in computer for it
movie = 'Good will hunting'; // initializing a value means assigning some value to it.

function theNotebook() {
    let movie = 'The Notebook'; // Accessible only the 
    return movie;
}

console.log(movie); //Good will hunting => Global Scope
console.log(theNotebook()); //Function => Global Scope
console.log(movie); //Good will hunting => Global Scope

/* 
    Checks for the closest block in the scope tree
    If not found, goes up the hierarch in the block.
*/

function puppies() {
    let isHorse = true;
    let saying = 'Backon is good';
    console.log('\n Before if:', saying);

    if (isHorse) { // This is also a block
        let saying = 'I am a horse';
        console.log('Inside IF', saying);
    }
    console.log('After IF', saying);
}

puppies();


console.log('------------Revision-----------');

/* Revision */
let someMovie  = 'Hello'; // initializing

function callTheMovie(){
    let someMovie = 'Dragonwar';
    return someMovie;
}
console.log(someMovie);
console.log(callTheMovie());
console.log(someMovie);





