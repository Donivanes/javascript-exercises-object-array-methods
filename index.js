// =============================================================================
// 1. Calcula el precio total de los items de un objeto productPrices
// cuya propiedad es el nombre del producto y el valor es el precio del producto.
// Usa object.values()
// Ej objeto: { laptop: 800, phone: 600, tablet: 400, headphones: 100 }
// =============================================================================

function getTotalPrice2(object) {
  const valuesArr = Object.values(object);
  let totalprice = 0;
  for (i = 0; i < valuesArr.length; i = i + 1) {
    //el bucle para iterar el array que tenemos (valuesArr)
    totalprice = totalprice + valuesArr[i]; //suma del acumulador
    //totalprice += valuesArr[i] (se utiliza para acumular en la misma variable )
  }
  console.log(totalprice);
  return totalprice;
}

function getTotalPrice(object) {
  return Object.values(object).reduce((acum, value) => acum + value, 0);
}

// =============================================================================
// 2. Dado un objeto con nombres de personas como claves y edades como valores,
// calcula la media de edad de las personas. Usa object.values()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// =============================================================================

function getAverageAge(object) {
  const ages = Object.values(object); // Obtenemos un array con las edades (valores del objeto)

  const sumOfAges = ages.reduce((sum, age) => sum + age, 0); // Calculamos la suma de todas las edades usando reduce

  const average = sumOfAges / ages.length; // Calculamos la media dividiendo la suma entre el número de personas

  return average; // Retornamos el promedio calculado
}

// =============================================================================
// 3. Crea un array de objetos a partir de un objeto con nombres de personas
// como propiedades y edades como valores. Usa object.keys()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, ...]
// =============================================================================

function getPeopleArray(object) {
  // Obtenemos un array con los nombres (claves del objeto)
  console.log("1");
  const names = Object.keys(object); // Mapeamos cada nombre y creamos un nuevo objeto con 'name' y 'age'
  const peopleArray = names.map((name) => ({
    name: name, // Asignamos el nombre a la propiedad 'name'
    age: object[name], // Accedemos a la edad usando el nombre como clave en el objeto original}));
  }));
  console.log(peopleArray); // Retornamos el array de personas
  return peopleArray;
}

// =============================================================================
// 4. Dado un objeto con nombres de frutas como claves y su cantidad como valor,
// filtra las frutas que tienen una cantidad superior a 10 y crea un array de
// objetos con el nombre de la fruta y su cantidad. Usa object.entries().
// Ej objeto: { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]
// =============================================================================

function getAbundantFruits(object) {
  
  const entries = Object.entries(object);// Obtenemos un array de pares [nombre de fruta, cantidad]

 
  const filteredFruits = entries.filter(([fruit, quantity]) => quantity > 10); // Filtramos las frutas que tienen una cantidad mayor a 10

  
  const result = filteredFruits.map(([fruit, quantity]) => ({
    fruit: fruit,
    quantity: quantity,
  }));// Mapeamos el array filtrado a un array de objetos con 'fruit' y 'quantity'

  
  return result;// Retornamos el array de frutas abundantes
}

// =============================================================================
// 5. Calcula la suma de todos los caracteres de un objeto, tanto la suma de los
// caracteres de las propiedades como la suma de los caracteres de los valores.
// El resultado debe ser un único numero.
// book: { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }
// =============================================================================

function getCharacterCount(object) {
  // Obtenemos los nombres de las propiedades (claves del objeto)
  const keys = Object.keys(object); // Obtenemos los valores del objeto
  const values = Object.values(object); // Contamos los caracteres de las propiedades sumando las longitudes de cada clave
  const keysCharCount = keys.reduce((sum, key) => sum + key.length, 0); // Contamos los caracteres de los valores sumando las longitudes de cada valor (convertido a string)
  const valuesCharCount = values.reduce(
    (sum, value) => sum + String(value).length,
    0
  ); // Sumamos los caracteres de las claves y los valores
  const totalCharCount = keysCharCount + valuesCharCount; // Retornamos la suma total de caracteres
  return totalCharCount;
}
