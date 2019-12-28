var chalk = require('chalk');
function Dog(name){
    this.name = name;
    this.stomath = [];
}
Dog.prototype.eat = function(Cat){
    this.stomath.push(Cat);
}
Dog.prototype.sayHi = function(){
    console.log('Hi, I am a dog. My name is ' + chalk.blue(this.name));
}
module.exports = Dog;