var Dog = require('./Dog');
var Cat = require('./cat');
var newDog = new Dog('Tom');
// newDog.sayHi();

var Tom = new Cat();
newDog.eat(Tom);
console.log(newDog);