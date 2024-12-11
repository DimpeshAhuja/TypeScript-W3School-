const car: { type: string, model: string, year: number } = {
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
const car3: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car3.mileage = 2000;
  console.log(car3);


//   Index Signature
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = "Fifty";
console.log(nameAgeMap);
