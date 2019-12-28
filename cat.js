function Cat(){
    this.stomath = [];
}
Cat.prototype.eat = function(Mouse){
    this.stomath.push(Mouse);
}
module.exports = Cat;