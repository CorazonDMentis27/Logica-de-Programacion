const readline = require("readline");

console.log("Bienvenido al menú interactivo de la consola");
console.log("Por favor, selecciona una opción del menú:");

// Creamos el menú como array de objetos
const menu = [
    { nombre: "Pizza", precio: 10, ingredientes: ["Masa", "Salsa de tomate", "Queso"] },
    { nombre: "Hamburguesa", precio: 8, ingredientes: ["Pan", "Carne", "Lechuga", "Tomate"] },
    { nombre: "Ensalada", precio: 6, ingredientes: ["Lechuga", "Tomate", "Pepino", "Aderezo"] },
    { nombre: "Pasta", precio: 12, ingredientes: ["Pasta", "Salsa de tomate", "Queso parmesano"] },
    { nombre: "Sopa", precio: 5, ingredientes: ["Caldo", "Verduras", "Fideos"] },
];

// Mostramos el menú
console.log("1. Pizza");
console.log("2. Hamburguesa");
console.log("3. Ensalada");
console.log("4. Pasta");
console.log("5. Sopa");

// Creamos la interfaz readline
const dr = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntamos al usuario
dr.question("Seleccione una opción del menú: ", (opcion) => {
    const opcionIndex = parseInt(opcion) - 1; // Convertimos la opción a índice (0-based)

    if (opcionIndex >= 0 && opcionIndex < menu.length) {// Verificamos que la opción sea válida
        // Si la opción es válida, mostramos los detalles del plato seleccionado
        const item = menu[opcionIndex];
        console.log(`\nHas seleccionado: ${item.nombre}`);
        console.log(`Precio: $${item.precio}`);
        console.log(`Ingredientes: ${item.ingredientes.join(", ")}`);
    } else {
        console.log("Opción no válida.");
        console.log("Por favor, selecciona un número entre 1 y 5.");
    }

    console.log("\nGracias por usar el menú interactivo de la consola.");
    console.log("Recuerda que puedes volver a ejecutar el programa para ver el menú nuevamente.");
    console.log("¡Hasta luego!");

    // Cerramos la interfaz
    dr.close();
});
