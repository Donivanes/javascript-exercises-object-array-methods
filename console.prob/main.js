// function getAverageAge(object) {
//   const ages = Object.values(object)
//   console.log(ages)
//   console.log()   

//   const ageString = ages.reduce(function(valorActual, valorAcumulado, indice, array) {
//     console.log({valorActual, valorAcumulado})
//     return valorActual + valorAcumulado;
//   })
//   const averageAge = (ageString / ages.length)
//   return console.log(averageAge)


// }
// const objeto = { Alice: 25, Bob: 30, Charlie: 28, David: 35 }

// getAverageAge(objeto)








// ===========================================================================
// const myObject = { name: 'John', age: 30, job: 'developer' };
// const keys = Object.keys(myObject); // Returns ["name", "age", "job"]

// const objeto = { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// // Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 },

// function getPeopleArray(object) {
//   // Obtenemos las propiedades del objeto como un array
//   const keys = Object.keys(object);
//   console.log(keys)

//   // Usamos map para transformar las propiedades y valores en objetos
//   const peopleArray = keys.map((name) => {
//     const age = object[name];
//     console.log(age)

//     return { name, age };
//   });

//   return peopleArray;
// }

// // Ejemplo de uso
// const personas = { Alice: 25, Bob: 30, Charlie: 28, David: 35 };
// const resultado = getPeopleArray(personas);
// console.log(resultado);









// =============================================================================

// const objeto = { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// // Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]

// function getAbundantFruits(object) {
//   const fruitEntries = Object.entries(object);
//   console.log(fruitEntries)
//   const abundantFruits = fruitEntries.filter(([fruit, quantity]) => quantity > 10);
//   console.log(abundantFruits)
//   const result = abundantFruits.map(([fruit, quantity]) => ({
//     fruit,
//     quantity,
//   }));

//   return result;
// }




// =============================================================================


 const book = { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }

function getCharacterCount(object) {
  const properties = Object.keys(object)
  console.log(properties)

  const concatString = properties
  
  object
  const values = Object.values(object)
  console.log(values)

}

getCharacterCount(book)