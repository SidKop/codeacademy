// Our Person constructor
function Person (name, age){
    this.age = age
    this.name = name
}

// Now we can make an array of people
family= []
var alice = new Person('alice',40)
var bob = new Person('bob',42)
var michelle = new Person('michelle',8)
var timmy = new Person ("timmy",6)
family = [alice, bob, michelle, timmy]
// console.log(family);

// loop through our new array
for ( i = 0; i < family.length; i++){
    console.log(family[i].name);
}
