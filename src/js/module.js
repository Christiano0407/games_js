/* const hello = () => { */
/*     return `Hello!` */
/* } */
/*  */
/* export default hello;  */
/*  */

// ==== ECMA SCRIPT 7  / 2016=================

console.log("ECMASCRIPT7")

// Includes = saber sí tenemos un valor incluido en un array o un string. / TRUE OR FALSE.
let numbers = [1,2,3,4,5,6,7]; 

if(numbers.includes(7)) {
    console.log(`Sí, incluye el valor 7`); 
} else {
    console.log("No se encuentra"); 
}

let number = [1,2,3,4,5,6,7,8,9, 10]; 

if(number.includes(4)) {
    console.log("Sí, esos son mis números de la suerte"); 
}else {
    console.log("No!!! Lo siento."); 
}

//Elevar a la potencia:
let base = 4; 

let exponent = 3; 

let result = base** exponent; 
//(4*4 = 16 * 4 = 64).
console.log(result); 


            // ==== ECMA SCRIPT 8 =================
// === OBJECT ENTRIES, OBJECT VALUES, PADDING, TRAILING-COMAS

 // Object Entries: Devolver la clave y los valores de una matriz es un array(Transformar).

 //1) De un Object a un Array (matriz) clave y valor: 

 const data = {
     frontend: `Christian`, 
     backend: `óscar`, 
     designer: `Granatta`, 
     Data: `Natasha`,
 }

 const entries = Object.entries(data); 
 console.log(entries); 
 console.log(entries.length); 

 const people = {
     person1: `Luisa`, 
     person2: `Alma`, 
     person3: `Emma`, 
     person4: `Daniela`,
 }
 const peoples = Object.entries(people); 
 console.log(peoples); 

 //2) Object Values Valores de un objeto a un Array: 
 const persons = {
    person1: `Luisa`, 
    person2: `Alma`, 
    person3: `Emma`, 
    person4: `Daniela`, 
    person5: `Ana`, 
    person6: `Alexa`,
}
const person = Object.values(persons); 
console.log(person); 
console.log(person.length); 

// Padding (Agregar o quitar elementos): // .padStart: / .padEnd: ...
const string = `hello`; 
console.log(string.padStart(8, `Hi `)); 
console.log(string.padEnd(12, ` ======`)); 
console.log(`food`.padEnd(12, ` ======`)); 

//        ===== Async Await =====
// ### 1-fUNCIÓN 2- Promesa 3- Invocar:
//1:
const helloWorld = () =>  {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve(`Hello World People`), 3000)
        : reject(new Error(`Test Error People`))
    })
}; 
//2: 
    const helloAsync = async () => {
    const hello = await helloWorld(); 

    console.log(hello); 
}; 

//3: 
helloAsync(); 

// Otra forma de estructurar: try y catch: 
const anotherFunction = async () => {
  try {
      const hello = await helloWorld();
      console.log(hello); 
  }catch (error) {
    console.log(error); 
  }
}
anotherFunction(); 

// ========= Practice Async =======
const animals = {
    animal1: `Mono`, 
    animal2: `Jirafa`, 
    animal3: `Rinoceronte`, 
    animal4: `Pingüino`,
}



// ==== ECMA SCRIPT 9 =================



// ==== ECMA SCRIPT 10 =================
