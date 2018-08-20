// Question 1 :
console.log("printReverse")

var numerics = ([1,2,3,4]);
var alphabet = (["a","b","c","d"]);

reverse = numerics.reverse();
console.log(reverse);

reverse2 = alphabet.reverse();
console.log(reverse2);

function print(numOrAlpha){
  for ( var i = 0; i < numOrAlpha.length; i++){
  console.log(i);
  }
}

console.log(print(reverse));
console.log(print(reverse2));

// Question 2 :
console.log("Calculate sum of array")
arrSum = function(arr){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
}
console.log(arrSum([1,2,3]));
console.log(arrSum([10,3,10,4]));
console.log(arrSum([-5,100]));

// Question 3:
console.log("find max value in array")
function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}

console.log(arrayMax([1,2,3]));
console.log(arrayMax([10,3,10,4]));
console.log(arrayMax([-5,100]));


