let ourTuple: [number , Boolean, String];
ourTuple = [1, true, 'Hello'];
console.log(ourTuple);


let our: [number, boolean, string];
our = [5, false, 'Coding God was here'];
our.push('Something new and wrong');
console.log(our);

// Readonly
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off');


// Named Tuple
// const graph: [x: number, y: number] = [55.2, 41.3];
// console.log(graph);


// Destructuring Tuple
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
console.log(graph);