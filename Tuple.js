var ourTuple;
ourTuple = [1, true, 'Hello'];
console.log(ourTuple);
var our;
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
var graph = [55.2, 41.3];
var x = graph[0], y = graph[1];
console.log(graph);
