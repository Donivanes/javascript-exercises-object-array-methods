// =============================================================================
// 1. Calcula el precio total de los items de un objeto productPrices
// cuya propiedad es el nombre del producto y el valor es el precio del producto.
// Usa object.values()
// Ej objeto: { laptop: 800, phone: 600, tablet: 400, headphones: 100 }
// =============================================================================

function getTotalPrice(object) {
  // Aquí tu código
  //console.log;
  //const mylist = { laptop: 800, teléfono: 600, tablet: 400, auriculares: 100 };
  const amounts = Object.values(object);
  //console.log(amounts);
  const total = amounts.reduce((total, indivpPice) => total + indivpPice, 0);
  return total;
}

// =============================================================================
// 2. Dado un objeto con nombres de personas como claves y edades como valores,
// calcula la media de edad de las personas. Usa object.values()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// =============================================================================

function getAverageAge(object) {
  // Aquí tu código
  // console.log(object);
  const ages = Object.values(object);
  //console.log(ages);
  const totalAge = ages.reduce((total, age) => total + age, 0);
  //console.log(totalAge);
  const avgAge = totalAge / ages.length;
  //console.log(avgAge);
  return avgAge;
}

// =============================================================================
// 3. Crea un array de objetos a partir de un objeto con nombres de personas
// como propiedades y edades como valores. Usa object.keys()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, ...]
// =============================================================================

function getPeopleArray(object) {
  // Aquí tu código
  // console.log(object);
  const name = Object.keys(object);
  //console.log(name);

  const nuevoArray = name.map(function (names) {
    return {
      name: names,
      age: object[names],
    };
  });
  //console.log(nuevoArray);
  return nuevoArray;
}
//const concatArray = keys.concat(value);
//console.log(concatArray);

// =============================================================================
// 4. Dado un objeto con nombres de frutas como claves y su cantidad como valor,
// filtra las frutas que tienen una cantidad superior a 10 y crea un array de
// objetos con el nombre de la fruta y su cantidad. Usa object.entries().
// Ej objeto: { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]
// =============================================================================

function getAbundantFruits(object) {
  // Aquí tu código
  const fruitArrays = Object.entries(object);
  // console.log(fruitArrays);
  const filteredArray = fruitArrays.filter(function ([, quantity]) {
    return quantity > 10;
  });

  //console.log(filteredArray);

  const final = filteredArray.map(function ([fruit, quantity]) {
    return {
      fruit: fruit,
      quantity: quantity,
    };
  });
  //console.log(final);
  return final;
}

// =============================================================================
// 5. Calcula la suma de todos los caracteres de un objeto, tanto la suma de los
// caracteres de las propiedades como la suma de los caracteres de los valores.
// El resultado debe ser un único numero.
// book: { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }
// =============================================================================

function getCharacterCount(object) {
  // Aquí tu código
  //console.log(object);
  const keys = Object.keys(object);
  //console.log(keys);

  let KeyTextLength = 0;
  keys.forEach(function (keyItem) {
    KeyTextLength = KeyTextLength + keyItem.length;
  });
  //return KeyTextLength;
  //console.log(KeyTextLength);

  const values = Object.values(object);
  //console.log(values);

  let valueTextLength = 0;
  values.forEach(function (valueItem) {
    valueTextLength = valueTextLength + valueItem.length;
  });
 // console.log(valueTextLength);

  return KeyTextLength + valueTextLength;
  //console.log(KeyTextLength + valueTextLength);
}




/*




function getCharacterCount(object) {
  let total = 0;

  // Loop through each key in the object
  for (let key in object) {
    // Add the length of the key (property name)
    total += key.length;

    // Add the length of the value (converted to a string to handle non-string values)
    total += String(object[key]).length;
  }

  return total; // Return the total count of characters
}




--------------------------------------------------------------------------------------------------------
another way to to this i found... not using a .forEach... but rath a "For ...in"
for... in.. are used on Objects OR Arrays, so this may be better in the future. I don't think we covered this today though......????
//for...in:

    Best for objects when you want to loop through the keys (property names) of an object.


.forEach():

    Not applicable to objects directly. If you need to iterate over the values of an object, 
    you'd first need to get the object's values into an array using Object.values() or its keys using Object.keys().

Use Cases

    for...in:
        Used primarily for iterating over objects. It loops over the keys of the object.
        It can be used with arrays, but it loops over the indices (keys) of the array, which is less useful for arrays and can cause confusion.

    .forEach():
        Specifically designed to loop over the values in an array.
        Cannot be used with objects directly, only with arrays or array-like structures.
*/