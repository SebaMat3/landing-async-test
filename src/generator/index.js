// Generator function: use * to define it as such.
function* gen(){
    //yield keyword holds a given value to be returned
    yield 1;
    yield 2;
    yield 3;
}

// Assigning generator to variable allows us to iterate with it, using .next method to advance on yielded values.
const g = gen();

console.log(g.next().value); //1
console.log(g.next().value); //2
console.log(g.next().value); //3
console.log(g.next().value); // undefined

function* iterate(arr) {
    for (element of arr){
        yield element;
    }
}

const it = iterate(['Oscar', 'Omar', 'Ana', 'Lucia', 'Juan']);
console.log(it.next().value); //Imprime el primer elemento del array: Oscar
console.log(it.next().value); //Imprime el segundo elemento del array: Omar 
console.log(it.next().value); // prints Ana
console.log(it.next().value); //vPrints Lucia
console.log(it.next().value); //Si se coloca un sexto console, la consola indica "Undefined"
