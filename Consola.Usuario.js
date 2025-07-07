//EJERCICIO 35
const readline = require('readline'); //recuerda es una linea que importa un modulo de Node para interacutar con la consola, tmb conocido como libreria readline
//Ingresa un nombre y usaurio y contraseña, si son correctos muestra un mensaje de bienvenida
const blodywood = readline.createInterface({
    input: process.stdin, // Entrada estándar (teclado)
    output: process.stdout // Salida estándar (consola)
});
function login() {
    console.log("Bienvenido por favor espera mientras verificamos tus datos...");
    blodywood.question("Ingresa tu nombre, Mortal: ", (nombre) => { // Preguntamos al usuario por su nombre
    blodywood.question("Ingresa tu usuario: " ,  (usuario) => { // Preguntamos por el usuario del Mortal
    blodywood.question("Ingresa tu contraseña: " , (contraseña) => { // Pregguntamos por la contraseña del Mortal
         // Mensaje de bienvenida inicial
        // Verificamos si el usuario y la contraseña son correctos
        if( usuario === "Admin" && "1234"=== contraseña) { // Comparamos el usuario y la contraseña ingresados con los valores correctos
        console.log("Bienvenido " + nombre + ", puede visitar el Vallhala"); // Mensaje de bienvenida si las credenciales son correctas
        } else {
            console.log ("No son correctas las credenciales, muere pagano"); // Mensaje de error si las credenciales son incorrectas
        }
        blodywood.close(); // Cerramos las interfaces de lectura y escritura no olvidar
    });
    });
    });
}
login(); // Llamamos a la función login para iniciar el proceso de inicio de sesión, no olvidar que esta funcion se ejecuta una vez que se llama
 