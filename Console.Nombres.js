const readline = require('readline');//No olvides importar la libreria readline para interactuar con la consola
const leer = readline.createInterface({//Recuerda que esto es siempre que usemos la libreria readline
    input: process.stdin, // Entrada estándar (teclado)
    output: process.stdout // Salida estándar (consola)
});

function saludarNombre(){
    leer.question("Ingresa tu nombre: ", (nombre) => { // Preguntamos al usuario por su nombre
   console.log(`Hola, ${nombre}! Bienvenido al programa.`); // Mostramos un saludo personalizado
   leer.question("Ingresa tu apellido: ", (apellido) => { // Preguntamos por el apellido
    console.log("Hola tu nombre es " + nombre + " y tu apellido es " + apellido); // Mostramos el nombre y apellido
    leer.question("Ingresar su edad para confimar si es mayor de edad: " , (Edad) => { // Preguntamos por la edad
        if (Edad >= 18){
            console.log("Eres mayor de edad puedes ingresar al programa")
        }else{
            console.log("Lo sentimos, aun eres menor de edad")
        }
        leer.close(); // Cerramos la interfaz de lectura y escritura})      
    });
    }); 
});}   
saludarNombre(); // Llamamos a la función para iniciar el proceso de saludo