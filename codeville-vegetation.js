
let judgeVegetable = function (vegetables, metric) {
  var bestPoint = 0
  var bestSubmitter = ""
  for (let i = 0; i < vegetables.length; i++) {
    if (bestPoint < vegetables[i][metric]) {
      bestPoint = vegetables[i][metric]
      bestSubmitter = vegetables[i].submitter
    }
  }
  return bestSubmitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric))



/*
let i = 0; //outer iterator
let j = 0; //inner iterator
//if there's only one participant
if (vegetables.length <= 1) {
  return vegetables[i].submitter
}
//first position as default winner
let winner = null;
let highScore = 0;
for ( i ; i < vegetables.length; i ++){
  for (j in vegetables[i]) {
    if (j === metric && vegetables[i][j] > highScore ){
      console.log(highScore = vegetables[i][j]);
      console.log (winner = vegetables[i].submitter);
    }
  }
}
return winner;
}
const vegetables = [
{
  submitter: 'Old Man Franklin',
  redness: 10,
  plumpness: 5
},
{
  submitter: 'Sally Tomato-Grower',
  redness: 2,
  plumpness: 8
},
{
  submitter: 'Hamid Hamidson',
  redness: 4,
  plumpness: 3
}
]

console.log(judgeVegetable(vegetables, "plumpness"));
*/