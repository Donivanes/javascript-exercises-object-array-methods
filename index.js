// =============================================================================
// 1. Calcula el precio total de los items de un objeto productPrices
// cuya propiedad es el nombre del producto y el valor es el precio del producto.
// Usa object.values()
// Ej objeto: { laptop: 800, phone: 600, tablet: 400, headphones: 100 }
// =============================================================================

function getTotalPrice(object) {
  const values = Object.values(object);
  const sumtotal = values.reduce((total, price) => total + price, 0);
  return sumtotal;
}

// =============================================================================
// 2. Dado un objeto con nombres de personas como claves y edades como valores,
// calcula la media de edad de las personas. Usa object.values()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// =============================================================================

function getAverageAge(object) {
  const ages = Object.values(object);
  const totalAges = ages.reduce((total, ages) => total + ages, 0);
  const media = totalAges / ages.length;
  return media;
}

// =============================================================================
// 3. Crea un array de objetos a partir de un objeto con nombres de personas
// como propiedades y edades como valores. Usa object.keys()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, ...]
// =============================================================================

function getPeopleArray(object) {
  const names = Object.keys(object); // Devuelve el valor de los nombres
  const objectArray = names.map(name => { // Recorremos y asignamos los nombres a los valores en un array de objetos
    return {
      name: name,
      age: object[name],
    };
  });
  return objectArray;
  

}

// =============================================================================
// 4. Dado un objeto con nombres de frutas como claves y su cantidad como valor,
// filtra las frutas que tienen una cantidad superior a 10 y crea un array de
// objetos con el nombre de la fruta y su cantidad. Usa object.entries().
// Ej objeto: { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]
// =============================================================================

function getAbundantFruits(object) {
  const fruitsArray = Object.entries(object); // Convertimos el objeto en un array de arrays
  const filteredFruits = fruitsArray.filter(function([, quantity]){ // Desestructuramos y filtramos con la cantidad de frutas
    return quantity > 10; // Filtramos
  });
  const result = filteredFruits.map(function([fruit, quantity]) { // Volvemos a convertir el array de arrays en un array de objetos.
    return { fruit: fruit, quantity: quantity };
  });
  return result;
}

// =============================================================================
// 5. Calcula la suma de todos los caracteres de un objeto, tanto la suma de los
// caracteres de las propiedades como la suma de los caracteres de los valores.
// El resultado debe ser un único numero.
// book: { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }
// =============================================================================

function getCharacterCount(object) {
  const sumChar = Object.entries(object);
  const flatArray = sumChar.flat();
  const redArray = flatArray.reduce((acc, array) => acc + array.length, 0);
  return redArray;
}
