var Cat = require('./cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');


var cat = new Cat();
var mouse = new Mouse('Mikey');
var dog = new Dog();

try{
    cat.eat(dog);
}catch(error){
    console.log('Error while cat eating dog');
}

console.log(cat);