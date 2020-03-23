// question 1

var myAnswer = "This is my answer to question 1";

// question 2

var person = {
    name: "Henry",
    age: 102
  };

//question 3

var outOfStock = true;
if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
};

// question 4

var rememberLost = [4, 8, 15, 16, 23];
for (var i = 0; i < rememberLost.length; i++) {
    console.log(rememberLost[i]);
  };

// question 5

for (var i = 15; i <= 25; i++) {
    console.log(i);
  };

// question 6

for (var i = 15; i <= 25; i++) {
    if (i === 20) {
      console.log(i);
    }
  };

// question 7

var guitars = [
    {
      guitarName: "G&L Legacy Deluxe Black Ice",
      modelYear: 2012,
      inStock: false
    },
    {
      guitarName: "Suhr Standard Roasted - Trans Black",
      modelYear: 2020,
      inStock: true
    }
  ];
  
  for (var i = 0; i < guitars.length; i++) {
    console.log(guitars[i].modelYear);
    console.log(guitars[i].inStock);
 };
  

// question 8

function whatIDontLike(dontlike) {
    console.log("I don't like " + dontlike);
  }
  whatIDontLike("sand");

// question 9

function subtractTwoNumbers(num1, num2) {
    var sum = num1 - num2;
    console.log(sum);
 }
 subtractTwoNumbers(88, 44);
 

// question 10

let myArray = [];

function addToArray(guitar) {
  myArray.push(guitar);
}
addToArray("Fender");