//EJERCICIO 34
//crear una pregunta en consola para sumar dos numeros y mostrar el resultado
//IMPORTANTE: Este ejercicio requiere el uso de la librería 'readline' para interactuar con la consola y recibir entradas del usuario.
const readline = require('readline');
// Esta función solicita al usuario dos números, los suma y muestra el resultado en la consola.
function sumarNumeros() {
    // Creamos una interfaz de lectura/escritura para interactuar con la consola
    // 'readline' permite leer entradas del usuario desde la consola.
    const rl = readline.createInterface({
        input: process.stdin, // Entrada estándar (teclado)
        output: process.stdout // Salida estándar (consola)
    });

    rl.question ("Ingrese el primer número: ", (lodo) => { // Preguntamos al usuario por el primer número
        // Una vez que el usuario ingresa el primer número, se ejecuta la función de devolución de llamada (callback).
        rl.question("Ingrese el segundo número: ", (input2) => {// Preguntamos por el segundo número
            // Una vez que el usuario ingresa el segundo número, se ejecuta esta función.
            const num1 = parseFloat(lodo);// Convertimos el primer número ingresado a un número de punto flotante (decimal).
            // parseFloat convierte una cadena de texto a un número decimal.
            const num2 = parseFloat(input2);// Convertimos el segundo número ingresado a un número de punto flotante (decimal).
            // parseFloat convierte una cadena de texto a un número decimal.
            const resultado = num1 + num2;// Sumamos los dos números ingresados por el usuario.
            // Guardamos el resultado de la suma en la variable 'resultado'.
            console.log("El resultado de la suma es: " + resultado);// Mostramos el resultado de la suma en la consola.
            rl.close();// Cerramos la interfaz de lectura/escritura para finalizar la interacción con el usuario.
        });
    });
}
sumarNumeros(); // Llamamos a la función para iniciar el proceso de suma.