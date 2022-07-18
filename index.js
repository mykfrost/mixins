const canEat = {

    eat: function(){
        this.hunger--;
        console.log('eating')
    }
};

//Implementation using empty objects
const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const person = Object.assign({}, canEat, canWalk);
console.log('Object Implementation',person);
//Implemetation usinig constructor fucntion

function Person(){}
Object.assign(Person.prototype, canEat , canWalk);

const person2 = new Person();

console.log('Person Two',person2);
