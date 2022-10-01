// Given an array of integers and a target number, write a function
// that returns an array of indexes of two integers that add up to the target
// PS: Array can not be sorted

// Input: 
//   List: [3, 2, -4, 12, -6, 7]
//   Target: -3
// Output: [0, 4]; // where 0 is index of 3 and 4 is index of -6

function findIndexes(input, target) {
  const prev = {};
  
  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    const needed = target - current;
    
    if(prev[needed] !== null){
      return [prev[needed], i];
    } else {
      prev[current] = i;
    }
  }
}

console.log(findIndexes([3, 2, -4, 12, -6, 7], -3));
