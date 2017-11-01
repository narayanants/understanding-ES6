/*
	Spread Operator
*/

'use strict';



function theVolleyBall(a,b){
	console.log(a+b,3);
}

let nums = [3,4,5];

theVolleyBall(...nums);

//theVolleyBall(nums[0],nums[1],nums[2]); // old way


let meats = ['bacon','fish'];
let food =  ['apples',...meats,'kiwi','rice'];   // add after apples

console.log(food);














