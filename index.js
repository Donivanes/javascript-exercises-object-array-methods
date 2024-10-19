// =============================================================================
// 1. Calcula el precio total de los items de un objeto productPrices
// cuya propiedad es el nombre del producto y el valor es el precio del producto.
// Usa object.values()
// Ej objeto: { laptop: 800, phone: 600, tablet: 400, headphones: 100 }
// =============================================================================

function getTotalPrice(object) {
  const prices = Object.values(object);

  let total = 0;

  for (let price of prices) {
    total += price;
  }

  return total;

}
//ejemplo
const productPrices = { laptop: 800, phone: 600, tablet: 400, headphones: 100 };
console.log (getTotalPrice(productPrices));

// =============================================================================
// 2. Dado un objeto con nombres de personas como claves y edades como valores,
// calcula la media de edad de las personas. Usa object.values()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// =============================================================================

function getAverageAge(object) {
  const ages = Object.values(object);
  let total = 0;
  for (let age of ages) {
    total += age;
  }

  const average = total / ages.length;

  return average;
}

const ages = { Alice: 25, Bob: 30, Charlie: 28, David: 35 };
console.log(getAverageAge(ages));

// =============================================================================
// 3. Crea un array de objetos a partir de un objeto con nombres de personas
// como propiedades y edades como valores. Usa object.keys()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, ...]
// =============================================================================

function getPeopleArray(object) {
  const names = Object.keys(object);
  const result = [];
  for (let name of names) {
    result.push({ name: name, age: object[name] });
  }

  return result;
}

const people = { Alice: 25, Bob: 30, Charlie: 28, David: 35 };
console.log(getPeopleArray(people));

// =============================================================================
// 4. Dado un objeto con nombres de frutas como claves y su cantidad como valor,
// filtra las frutas que tienen una cantidad superior a 10 y crea un array de
// objetos con el nombre de la fruta y su cantidad. Usa object.entries().
// Ej objeto: { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]
// =============================================================================

function getAbundantFruits(object) {
  const fruits = Object.entries(object);
  const result = [];
  for (let [fruit, quantity] of fruits) {
    if (quantity > 10) {
      result.push({ fruit: fruit, quantity: quantity });
    }
  }

  return result;
}

const fruits = { Apple: 5, Banana: 15, Orange: 8, Grape: 12 };
console.log(getAbundantFruits(fruits));
// =============================================================================
// 5. Calcula la suma de todos los caracteres de un objeto, tanto la suma de los
// caracteres de las propiedades como la suma de los caracteres de los valores.
// El resultado debe ser un único numero.
// book: { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }
// =============================================================================

function getCharacterCount(object) {
  // Aquí tu código
  const properties = Object.keys(object);
  const values = Object.values(object);

  let characterTotal = 0;

  for (let property of properties) {
    characterTotal += property.length;
  }

  for (let value of values) {
    characterTotal += value.length;
  }

  return characterTotal;
}

const book = { title : 'El señor de los anillos', author: 'J.R.R. Tolkien', genre: 'Fantasía' };
console.log(getCharacterCount(book));
