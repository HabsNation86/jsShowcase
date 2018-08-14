// Question 1 print all numbers between -10 and 19

console.log("Question 1");
let counter = -10;

while ( counter < 20){
  console.log(counter);
  counter ++;
}

// Question 2 Print even numbers between 10 and 40
console.log("Question 2");
let counter2 = 10 ;

while (counter2 < 40){
  console.log(counter2);
  counter2 +=2;
}

// Question 3 Print odd numbers between 300 and 333
console.log("Question 3");
let counter3 = 300;

while (counter3 <= 333){
  if ( counter3 % 2 !== 0){
    console.log(counter3);
  }
    counter3 ++;
}

// Question 4 Print all divisible by 3 AND 5 between 5 and 50
console.log("Question 4");
let counter4 = 5;

while ( counter4 <=50 ){
  if ( counter4 % 3 === 0 && counter4 % 5 === 0){
    console.log(counter4);
  }
  counter4 ++;
}

