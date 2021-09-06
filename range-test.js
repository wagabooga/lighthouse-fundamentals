// // range function
// function range(start, end, step) {

//   // create the result array
//   var result = [];

//   /* test to see if we have an step, otherwise set it to 1
//   if ( step == undefined )
//     step = 1;
//   */

//   // calculate the number of times to loop (this is because you might be going 
//   // up or down with your step)
//   numLoops = Math.abs((end - start) / step) + 1;

//   // loop that many times
//   for (var i = 0; i < numLoops; i++) {

//     // add (push) the value of start to the array
//     result.push(start);

//     // step the value of start
//     start += step;
//   }

//   // return the array with all the things in it
//   return result;
// }

// function sum(numArray) {
//   // set a variable to hold the sum
//   var arrayTotal = 0;

//   // see how many numbers are in the array
//   numLoops = numArray.length;

//   // loop that many times
//   for (var i = 0; i < numLoops; i++) {
//     // add the number at that index to the sum
//     arrayTotal += numArray[i];
//   }
//   // return the sum
//   return arrayTotal;
// }

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

function range(start, stop, step) {
  if (typeof stop == 'undefined') {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step == 'undefined') {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i <= stop : i >= stop; i += step) {
    result.push(i);
  }

  return result;
};

console.log(range(0,8,2))