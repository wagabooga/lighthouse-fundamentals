let finishedArray = []

function concat(array1,array2){
  var finishedArray = array1.concat(array2)
  return finishedArray
}
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);