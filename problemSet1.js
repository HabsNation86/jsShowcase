//  Problem set, Javascript Function

// Question 1: create "isEven"
console.log("Question 1");

function isEven(num){
  if ( num % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}


console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));


// Question 2: create factorial
console.log("Question 2")

function factorial(num1){
  if      (num1 < 0){
    return -1;
 }else if (num1 === 0){
    return 1;
 }else {
  return  (num1 * factorial(num1-1));
 }
}


console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));


// Question 3: Kebab-case to snake
console.log("Question 3")
function kebabToSnake(string){
  var newString = string.replace(/-/g , "_");
  return newString;
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));