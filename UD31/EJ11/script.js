// Definir variables para almacenar el resultado de cada lanzamiento de dado
let dado1 = 0;
let dado2 = 0;

// Definir un array para almacenar el número de apariciones de cada suma posible
let sumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Repetir la operación 36,000 veces
for (let i = 0; i < 36000; i++) {
  // Generar números aleatorios entre 1 y 6 para los dos dados
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;

  // Sumar los dos resultados y actualizar el contador correspondiente en el array de sumas
  const suma = dado1 + dado2;
  sumas[suma]++;
}
