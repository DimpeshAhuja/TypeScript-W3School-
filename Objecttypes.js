var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
//   const car1 = {
//     type: "Toyota",
//   };
//   car1.type = "Ford"; 
//   car1.type = 2; 
//   console.log(car1);
//   Optional Properties
// without Optional Property
// const car2: { type: string, mileage: number } = { 
//   type: "Toyota",
// };
// car2.mileage = 2000;
// with Optional Property
var car3 = {
    type: "Toyota"
};
car3.mileage = 2000;
console.log(car3);
//   Index Signature
var nameAgeMap = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = "Fifty";
console.log(nameAgeMap);
