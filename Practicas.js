//EJERCICIO 1
//Enunciado:
//Crea una variable edad y usa un if para imprimir:
//"Eres mayor de edad" si es 18 o más.
//"Eres menor de edad" si es menor de 18.

let edad= 17//asignamos una variable
console.log(edad)//con este codigo mostramos resultado

//Resolucion

if (edad>=18){
    console.log("Puede ingresar")
}else{
    console.log("No puede ingresar")
}

console.log("......")
//Ejercicio 2
//Enunciado:
//Crea una variable numero.
//Usa un if para imprimir:
//"El número es positivo" si es mayor que 0.
//"El número es negativo" si es menor que 0.
//"El número es cero" si es igual a 0.

//Resolucion

let Number = -1

if (Number===0){console.log("Es cero")}
else if(Number>0){console.log("Es numero positivo")}
else{console.log("Es negativo")}

console.log("......")

//Ejercicio 3
//Crea dos variables: usuario y contraseña.
//Si usuario es "admin" y contraseña es "1234", imprime "Acceso permitido".
//Si no, imprime "Acceso denegado".

//resolucion
let user = "admin"
let contra = 1234

if (user === "admin" && contra === 1234) {console.log("Si pasan")}
else {console.log("Contraseña o Usario incorrectos")}

//EJERCICIO 4
//🟢 1️⃣ Array básico
//Enunciado:
//Crea un array con tus 3 colores favoritos.
//Recórrelo con un for y muestra cada color en consola.

//RESOLUCION
let colores = ["verde", "azul", "morado", "naranja","amarillo"]

for (let i = 0; i<colores.length; i++){console.log("colores: " + colores[i])}

//EJERCICIO 5
//Enunciado:
//Crea un array con 5 edades diferentes.
//Recórrelo con for y usa if para imprimir:
//"Mayor de edad" si la edad es mayor o igual a 18.
//"Menor de edad" si es menor de 18.

//RESOLUCION

let age = [12,19,14,20,17,18,25,38,10,16,27,22] 

for (let i = 0; i<age.length;i++){
    if(age[i]<=17){
        console.log("Su edad es: " + age[i] + " No puede pasar")
    }else{
        console.log("Su edad es: " + age[i] + " Puede Pasar")
    }
}
//EJERCICIO 6
//Crea un array llamado numeros con estos valores: [2, 5, 8, 12, 15, 20].
//✅ Recorre el array con un for.
//✅ Para cada número, imprime:
//"Número par" si el número es par.
//"Número impar" si el número es impar.

let numeros = [2,5,8,12,15,20]

for (let i=0; i<numeros.length;i++){
    if(numeros[i]%2 === 0) {console.log("Este numero es par: " + numeros[i] + " Su doble es: " + numeros[i]*2)}
    else{console.log("Este numero es impar: " + numeros[i] + " Su doble es: " + numeros[i]*2)}
}
//EJERCICIO7
//Crea un array de números y pídele al usuario un número.
//Usa un if para verificar si el número está en el array y muestra un mensaje en consola.

let arreglo = [2,32,47,78,12,41,1]
let numberinc = 32

if(arreglo.includes(numberinc)){ //Me imagino que includes es una funcion y os parantesis es para indicar si esta dentro o no
console.log("El numero: " + numberinc + " Se encuentra dentro de la consola")
}else{console.log(numberinc + " No se encuentra dentro de la consola")}

//EJERCICIO 8
//Crea un array con nombres de invitados.
//Si el nombre que escribe el usuario está en el array, muestra: "Bienvenido, [nombre]".
//Si no, muestra: "Lo siento, no estás en la lista".

let huestex = ["Pedro","Maria","Darzi","Miranda","Ju-Se-On"]
let verix = "Ju-Se-On"
if(huestex.includes(verix)){console.log("El invitado " + verix + " se encuentra en la lista")}
else{console.log("No se encuentra " + verix + " en la lista, no puede pasar")}

///EJERCICIO 9///
//Tienes un array con edades.Si todas son mayores o iguales a 18, imprime "Todos son adultos".
//Si al menos uno es menor, imprime "Hay menores de edad".
//Pista: Usa un bucle o el método .every().

let craw = [27,18,19,23,54,67,22,20]
if(craw.every(edad => edad >= 18)){ //en este caso, se esta usando una funcion => sirve para acortar la palabra funcion y return, en este caso al usar un metodo every(usamos la variable edad para que se investigue todos los componentes dentro del array, edad es igual o mayor que 18)
    console.log("Todos son mayores, pueden pasar")
}else{console.log("Hay un menor")}

///EJERCICIO 10///
//Dado un array de números, encuentra cuál es el número mayor y muéstralo con un if.
//Pista: Puedes ir comparando uno por uno usando un bucle.  
let oño = [23,15,4,6,78,98,10,300,301,1];
let doom = oño[0];//se declara que la variable doom es la mayor y se empieza el indice desde cero suponiendo que es el mayor y al recorrer el bucle va guardando el siguiente mayor
let grax = oño[0]; //intentaremos declarar la menor
for(let i=1;i<oño.length;i++){//entonces el array corre desde la primera posicion, ya no desde la cero porq ya esta asumiendo eso la variable doom
    if(oño[i]>doom){doom = oño[i]}//Traduccion: Si oño[i] es mayor a la variable q guarda al numero mayor, entonces, debe acutalizarse y ser igual al numero recorrido en el indice para q se muestre el mayor    
    else if(oño[i]<grax){grax = oño[i]}//Traduccion: Si oño[i] es menor a la variable q guarda al numero menor, entonces, debe acutalizarse y ser igual al numero recorrido en el indice para q se muestre el menor
}
console.log("Este numero es el mayor: " + doom)
console.log("Este numero es el menor: " + grax)  
//EJERCICIO 11//
//Tienes un array de números.
//Recórrelo y mete los números pares en un array nuevo llamado pares, y los impares en otro llamado impares.
//Al final, imprime ambos arrays.

let numerosx=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let pares = [];
let impares = [];
//RESOLUCION

for(let i = 0; i<numerosx.length;i++){
    if(numerosx[i]%2 === 0){pares.push(numerosx[i]);} //El push es para almacenar objeto dentro de una array vacio, dependiendo de las especificaciones que se le den, en este caso numero pares
    else{impares.push(numerosx[i]);}//En este caso lo mismo que la condicion de arriba, pero el array se va almacenar esta vez con numeros impares
}
console.log("Estos son los numeros pares: " + pares);
console.log("Estos son los numeros pares: " + impares);

//EJERCICIO 12
//Dado un array de notas (ej: [15, 12, 20, 8, 17, 10]), cuenta cuántos alumnos están aprobados (nota ≥ 13).
//Muestra en consola la cantidad de aprobados y la cantidad de desaprobados.

let numx=[12,20,23,14,25,16,27,38,49,10,11,12,13,14,15,16,17,18,19,20,11,12,13,24,25,26,7,8,29,3]
let aprover = [];
let desprove = [];
//RESOLUCION
for(let p = 0; p <numx.length; p++){
    if(numx[p] >= 13){aprover.push(numx[p]);}
    else{desprove.push(numx[p])}
}
console.log("Estos son las notas aprobadas: " + aprover);
console.log("Estos son las notas aprobadas: " + desprove);

//EJERCICIO 13
//Luego imprime en consola solo los números que sean mayores que 5.
let aray = [1,2,3,4,5,6,7,8,9,10];
let nuevos =[]
for(let j = 0; j<aray.length; j++){
    if(aray[j]>= 5){nuevos.push(aray[j]);}
}
console.log("Estos son los numero mayores a 5: " + nuevos)

//EJERCICIO 14
//Si el array contiene la fruta "mango", imprime "¡Hay mango!". Si no, imprime "No hay mango".

let frutas = ["manzana", "pera", "mango", "fresa", "sandía"];
let varit = "mango"

if(frutas.includes(varit)){console.log("Este arreglo tiene: " + varit);}
else{console.log("No tiene mangos")}

//EJERCICIO 15
//Crea un array con 6 edades.
//Imprime en consola si cada edad es mayor o menor de 18, diciendo:
//"Edad X: Mayor de edad" o "Edad X: Menor de edad".

let edades = [12, 25, 17, 30, 15, 20, 18];

for(y=0;y<edades.length;y++){
    if(edades[y] >= 18){console.log(edades[y] + " Es mayor de edad");}
    else{console.log(edades[y] + " Es menor de edad")}}
//EJERCICIO 16
//Crea un array que almacene numero pares

let arg = []
let oro = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(t=0;t<oro.length;t++){
    if(oro[t]% 2 === 0){arg.push(oro[t]);}//recuerda el push es para que se almacene un nuevo digito que recorre el array principal, al nuevo array
}
console.log("Este arreglo tiene los numeros pares: " + arg)
console.log("SEPARACION")

let i = 0
while(i < 5){
    console.log(i)
    i++;
}
console.log(i)
console.log("SEPARACION")
//EJERCICIO 17
//Empieza con let i = 10;
//La condición debe ser i >= 1
//Dentro del while, imprimes y luego haces i--

let ceder = 10

while(ceder>=1){ //El while nos sirve para aqui hacer la comparacion o mejor dicho inicar un bucle en donde
    //se aumente uno y otro y otro, en este caso el ejercicio nos deja una variable con 10 y si esta encierra 10 entonces no tiene q ser menor que 1
    console.log(ceder)
    ceder--;//aqui decrementanos, no sumamos
}
//EJERCICIO 18
//suma todos los numero de un arreglo pero solo los pares

let kaido = 0 // en este caso es suma, sumamos, pero antes declaramos una variable que encierre un cero
let num = 1 // en este caso esta es la variable que ira sumando y sumando como si fuera del for 

while(num <= 20){
    if(num %2===0){
        kaido += num;
    }
    num++
}
console.log("La suma de todos los pares es: " + kaido)

//EJERCICIO 19
//Crea una función llamada filtrarMayores que reciba un array de edades y devuelva un nuevo array solo con las edades mayores o iguales a 18.

function Edadmayores(Edad) { //Creamos a funcion, para encerrar a estos numeros en el array que le daremos, en este caso es Edad
    let nuevo=[] //se decrala el array vacio para q dentro se coloquen los numeros que les daremos, a traves de la condicion
    for(let i=0; i<Edad.length;i++){ //el for clasico, no olvides, siempre abre llaves al final para encerrar un If
        if(Edad[i]>=18){nuevo.push(Edad[i]);//Seleccionamos segun esa condicion
        }
    }
    return nuevo;//aca retornamos, o mostramos como resultado el nuevo array
}
console.log(Edadmayores([2,15,16,18,19,20,27,28,30,1,2,7]));

//EJERCICIO 20
//Crea una función llamada filtrarPositivos que reciba un array de números y devuelva un nuevo array solo con los números positivos.

function filtraposi (posix) {
    let solopositivos = []
    for(let y = 0; y<posix.length;y++){
        if(posix[y] >= 0 ){solopositivos.push(posix[y]);
        }
    }
    return solopositivos;
}
console.log(filtraposi([,-2,-5,6-7,8,19,20,333,-456,-8,0]))

//EJERCICIO 21
//Crea una función llamada buscarProducto que reciba un array de nombres de productos y un nombre a buscar. La función debe devolver "Producto disponible" si lo encuentra, o "Producto no disponible" si no está.

function buscarProducto (platzi){
    let nombreabuscar = "Cepillos de cabello" 
    for( let u = 0; u<platzi.length; u++)
        if(platzi[u] === nombreabuscar){console.log("El producto " + nombreabuscar + "Se encuentra disponible")}
        else{console.log("El prodcuto " + nombreabuscar + "No cuenta con stock")}
    return      
    } 

//EJERCICIO 23
//Crea una clase llamada Libro que tenga:
//Un atributo titulo.
//Un atributo autor.
//Un método describir() que devuelva un texto que diga: "El libro [titulo] fue escrito por [autor]".

class Libro{ //CREAMOS LA CLASE
    constructor (titulo, autor){ //DEFINIMOS SUS PARAMETROS
        //DEFINIMOS SUS ATRIBUTOS PARA DARLES EL VALOR DE SU PARAMETRO
        this.titulo = titulo; //DEFINIMOS SU TITULO
        this.autor = autor;//DEFINIMOS A SU AUTOR   
    }
    describir() { //CREAMOS EL METODO 
        return ("Hola, El libro es " + this.titulo + " y fue escrito por " + this.autor) //DEFINIMOS DENTRO QUE RETORNARA
    }
}
const l = new Libro ("Coraza de guerra", "Noah Reyes") //CREAMOS EL OBJETO MEDIANTE EL NEW LIBRO Y PONEMOS LOS VALORES DE ESE OBJETO, Y LO ENCERRAMOS EN LA VARIABLE CONST L

console.log(l.describir()) //Y UNA VEZ DEFINIDO SU OBJETO, LLAMAMOS A LA VARIABLE QUE ENCIERRA ESE OBJETO PARA QUE EJECUTE EL METODO DESCRIBIR

//EJERCICIO 24
//Crea una clase llamada Usuario que tenga:
//Un atributo nombre.
//Un método saludar() que devuelva: "Hola, mi nombre es [nombre]".    

class User{ //Creamos la clase USER 
    constructor(nombre){ //DEFINIMOS SU PARAMETRO
        this.nombre=nombre //CREAMOS SU ATRIBUTO PARA IGUALARLO CON SU PARAMETRO, NOMBRE CON THIS.NOMBRE
    }
    saludar(){ //CREAMOS EL METODO, RECUERDA ESTE VA DENTRO DE () Y LUEGO ABRIMOS {}
        return ("Hola " + this.nombre + " Es un placer tenerte aqui") //DECLARAMOS LA FUNCION DEL METODO RETORNAMOS (RETURN) LAS FUNCIONES O EL ENUNCIADO QUE IRA DENTRO DEL METODO LLAMANDO A LOS ATRIBUTOS NECESARIOS
    }
    corre(){ //OTRO EJEMPLO DE METODO
        return (this.nombre + " Esta huyendo de los Zombis") // RETORNAMOS LAS FUNCIONES O ENUNCIADOS QUE VAN DENTRO DEL METODO,  LLAMANDO NUEVAMENTE A LOS ATRIBUTOS NECESARIOS
    }
}
const p = new User ("Noah") // CREAMOS UN OBJETO SENCILLO, DECLARAMOS LA VARIABLE P DE TIPO CONST (NO CAMBIA) Y CREAMOS EL OBJETO EN ESTE CASO USER Y PONEMOS EL NOMBRE DENTRO

console.log(p.saludar()); //MOSTRAMOS LOS RESULTADOS
console.log("Oh no, los Zombis se acercan. " + p.corre()) // MOSTRAMOS LOS RESULTADOS

//EJERCICIO 25
//Crea una función llamada saludar que reciba un nombre como parámetro y devuelva el mensaje:

function saluda(nombreunico){ //FUNCION SENCILLA, CREAMOS LA FUNCION Y LE ASIGNAMOS UN PARAMETRO O VARIABLE QUE ENCIERRE EL RETORNO
    return "Hola " + nombreunico // RETORNAMOS LA SEÑAL EL ENUNCIADO EN ESTE CASO JUNTAMOS EL HOLA CON LA VARIABLE QUE RECIBIRA MAS ADELANTE UN VALOR
}
console.log(saluda("Noah")) //MOSTRAMOS EN CONSOLA LA FUNCION Y LUEGO LE ASIGNAMOS VALOR

//EJERCICIO 26
//Crea una función llamada cuadrado que reciba un número y devuelva su cuadrado (el número multiplicado por sí mismo).
class op{ //creamos la clase op esto es un añadido para que podamos hacer mas
    constructor(ope){//construimos la clase y le asignamos un parametro
        this.ope=ope //a este parametro le agregamos un atributo
    }//cerramos
    mostrar(){return (this.ope)}//creamos el metodo, y retornamos el atributo
}

const o = new op ("10") //creamos el objeto, con su valor, creamos la variable o para que encierre al objeto

function potencia(potencia){ //aqui creamos la funcion que nos dara los resultados, creamos la funcion potencia y le asignamos su parametro
    return potencia * 2 //retornamos el valor del parametro multiplicado por 2
}
console.log("Ingrese un numero")
console.log("El numero ingresado es: " + o.mostrar() + " Por lo cual el numero al cuadrado es " + potencia(10))

//EJERCICIO 27
//Crea una función llamada calcularPrecioFinal que reciba:
//Un precio base.
//Un porcentaje de descuento.
//Debe devolver el precio final después de aplicar el descuento.

let precio = 20 //creamos una variable que encierre el precio que asignaremos
function calcularPrecioFinal (prex){ //creamos la funcon para calcular el precio final
    return prex * 0.5 //retornamos un valor, el precio multiplicado por su porcentaje
}
console.log("el precio total es: " + precio) //mostramos el resultado 
console.log("El descuento se visualiza en pantalla " + calcularPrecioFinal(precio)) //y asignamos el valor a la funcion, en este caso el valor de la variable

//EJERCICIO 28
//Crea una función llamada sumarDosNumeros que reciba dos números y devuelva la suma de ambos.
let poison = 18
let ivy = 19
function SumarDosNumeros (sumatoria, perro){
    return sumatoria + perro
}
console.log("El resultado es: " + SumarDosNumeros(poison,ivy))

//EJERCICIO 29
//Crea una función llamada saludoFormal que reciba un nombre y devuelva:
function quefue (dox){
    return dox 
}
console.log("Hola " + quefue("Perez"))

//EJERCICIO 30
//Crea una función llamada areaCuadrado que reciba el lado de un cuadrado y devuelva su área.
function nhombre (align){
    return align * align
}
console.log(nhombre(15))

//EJERCICIO 31
//Crea un objeto llamado persona con las siguientes propiedades:
//nombre
//edad
//ciudad
//Y agrega un método presentarse que devuelva:

let hola = "CrahsIA"
let aged = 23
let zone = "Silicon Valley"
///
class persona{
    constructor(nombre,edad,ciudad){
        this.nombre = nombre 
        this.edad = edad 
        this.ciudad = ciudad
    }
    presentarse(){return ("Hola, mi nombre es: " + this.nombre + " tengo " + this.edad + " de edad y vivo en " + this.ciudad + " Sere tu nuevo asistente hoy")}
    funciones(){return ("Que deseas hacer hoy: ")}
}
const oreo = new persona(hola, aged, zone)

console.log(oreo.presentarse())
console.log(oreo.funciones())

//EJERCICIO 32
//Crea un objeto llamado libro con:
//titulo
//autor
//año
//Y agrega un método descripcion que devuelva:

class library {
    constructor(titulo, autor, año){
        this.titulo = titulo
        this.autor = autor
        this.crash = año
    }
    devolver(){return ("El libro elegido es " + this.titulo + " su autor es " + this.autor + "fue escrito en el año " + this.crash)}
}
const owl = new library("Cdg","Noah Reyes","2025")

console.log (owl.devolver())

