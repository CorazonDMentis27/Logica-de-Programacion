const readline =require ('readline');
const mio = readline.createInterface({
    input:process.stdin,
    output: process.stdout,   
});

console.log("Opcion uno: Suma")
console.log ("Opcion dos: Resta")
console.log("Opcion tres: Multiplicacion")
console.log("Opcion cuatro: Division") 

const suma = "1";
const resta = "2";
const multiplicacion = "3"; 
const division = "4";  

function saludarMio() {
    mio.question("Ingresa tu primer numero: " , (number) => {
        const number1 = parseFloat(number);
    mio.question("Ingresa el segundo numero: " , (number2) => {
        const numero2 = parseFloat(number2);
    mio.question("Ingresa el valor de la operacion logica: " , (operacion) => {
        const number3 = operacion; 
        if (operacion === suma) { 
            const resultado = number1 + numero2;
            console.log(`El resultado de la suma es: ${resultado}`);
        }else if (operacion === resta) {
            const resultado = number1 - numero2
        console.log(`El resultado de la resta es: ${resultado}`)
        }else if (operacion === multiplicacion) {
            const resultado = number1 * numero2;
            console.log(`El resultado de la multiplicacion es: ${resultado}`);
        }else if (operacion === division) {
            if (number2 !== 0) { 
                const resultado = number1 / numero2;
                console.log(`El resultado de la division es: ${resultado}`);
            } else {
                console.log("Error: No se puede dividir por cero.");
            }
        } else {
            console.log("Operación no válida. Por favor, elige una opción entre 1 y 4.");
        }
        mio.close(); // Cerramos la interfaz de lectura y escritura
    });
    });
    }
    );
}
saludarMio(); // Llamamos a la función para iniciar el proceso de saludo  

        