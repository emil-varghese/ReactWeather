var name = ['emil','varghese','te'];

name.forEach(function(name) {
  console.log('forEach', name);
});

name.forEach((name) => {
  console.log('arrowFunc', name);
});

name.forEach((name) => console.log('arrowFunc 1', name));


var returnMe = (name) => name + '!';
console.log(returnMe('Emil'));

//Arrow function does not update the this keyword.
//but anonymous function does change the this keyword

function add(a,b){
  return a+b;
}

//add Statement
var addC = (a,b) => {
  return a + b;
}

// add expression. Automatically gets returned.
var addD = (a,b) =>  a+b;

console.log(add(1,3));
console.log(addC(9,1));
console.log(addD(1,1));
