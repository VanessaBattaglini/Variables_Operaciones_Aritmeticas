/* 2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos 
números diferentes y mayores a cero. Para ambos números,
calcular lo siguiente:  
● Suma ● Resta ● División ● Multiplicación ● Módulo */

// Preguntas al usuario donde se guardarán los valores en variables distintas

let number1 = parseInt(prompt("Ingresa un número mayor a 0:"));
let number2 = parseInt(prompt("Ingresa un segundo número, que sea diferente al primero y mayor a cero:"));

//Mostrar los resultados de las operaciones matemáticas en la pantalla

document.write(`El resultado de la suma es: ${number1 + number2}`+ '<br>' );
document.write(`El resultado de la resta es: ${number1 - number2}` + '<br>');
document.write(`El resultado de la multiplicación es: ${number1 * number2}` + '<br>');
document.write(`El resultado del módulo es: ${number1 % number2}` + '<br>');

let resultado = (number1 / number2).toFixed(2);//para aproximar los decimales

document.write(`El resultado de la división es: ${resultado}` + '<br>');

const linea = '-'.repeat(50);//linea de separación entre ejercicios

/* 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius 
y que la transforme a grados Kelvin y Fahrenheit.*/

//Pregunta al usuario sobre la temperatura en grados Celsius
let temperatura = +prompt("Ingrese la temperatura en grados Celsius: ");

//Transformación de temperatura en grados Celsius a grados Kelvin y Fahrenheit

let kelvin = temperatura + 273.15;
let fahrenheit = (temperatura * 9 / 5) + 32;

// Mostrar resultados en pantalla
document.write(`${linea}` + '<br>');
document.write(`La temperatura convertida de grados Celsius a grados Kelvin es de: ${kelvin} K` + '<br>');
document.write(`La temperatura convertida de grados Celsius a grados Fahrenheit es de: ${fahrenheit} F` + '<br>');

/*4. Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día. */

let dias = parseInt(prompt("Ingresa cantidad de días:"));

//Formulas de conversión

let anio = Math.floor(dias / 365);
let semanas = Math.floor((dias % 365) / 7);
let dias_anio = dias % 7;

// Mostrar resultados en pantalla
document.write(`${linea}` + '<br>');
document.write(`Según la cantidad de días ingresada el resultado en años son ${anio},
                las semanas son ${semanas} y los días son ${dias_anio}`  + '<br>');

/*5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
a continuación. 
● La suma de todos los números.
● El promedio de los 5 números ingresados.*/

let numero1 = +prompt("Ingresa un número:");
let numero2 = +prompt("Ingresa un segundo número diferente:");
let numero3 = +prompt("Ingresa un tercer número diferente:");
let numero4 = +prompt("Ingresa un cuarto número diferente:");
let numero5 = +prompt("Ingresa un quinto número diferente:");


//Cálculos matemáticos para obtener los resultados solicitados en el ejercicio

let media = ((numero1 + number2 + numero3 + numero4 + numero5)/ 5).toFixed(2);


// Mostrar resultados en pantalla
document.write(`${linea}` + '<br>');
document.write(`El resultado promedio de los números ingresados es: ${media}`);