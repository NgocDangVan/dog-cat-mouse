var Mouse = require('./Mouse');
function Cat(){
    this.stomath = [];
}
Cat.prototype.eat = function(animal){
    if(animal instanceof Mouse){
        this.stomath.push(animal);
    }else{
        throw new Error('Phai cho no an con chuot');
    }
    
}
module.exports = Cat;