 // ==== Ejercicio de métodos====

 import { persona, peoples } from './appMod2.js'; 

 function unidos()  {

     persona(); 

     peoples(); 
 } 

 unidos(); 

             // ===== ECMA9 ======

 // Spread Operator === Operador de Reposo = Extraer un valor de un objeto que no ha sido creado / 
const obj = {
    name: `Oscar`, 
    secondName: `Barajas`,
    age: 32, 
    country: `MX`, 
}

let {name, ...all} = obj; 

console.log(name, all);

// Porpagation Properties (Propagación)
const obj1 = {
    name: `Luisa`, 
    age: 30,
    city: `City Monterrey`
}

const obj2 = { 
    ...obj1, 
    country: `MX`
}

console.log(obj2); 

// ==== FINALLY 

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve(`World`)
        : reject(new Error(`Test error`))
    }); 
}; 

helloWorld()
.then( response => console.log(response))
.catch( error => console.log(error))
.finally(() => console.log(`Finalizado`));

// REGEX: Agrupar y poder acceder a cada uno de ellos.



// =============== ECMA 10 ==============

// Method Flat ( Deolver una matriz con una submatriz  aplanada) / recibe como argumentola profundidad.
const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]; 

console.log(array.flat(2));


// FlatMap(Mapear cada elemento, luego pasarle una función y aplanar)
let array2 = [1, 2, 3, 4, 5]; 
console.log(array2.flatMap( value => [value, value * 2])); 

// TrimStart (eliminar espacios en blanco)
let trim = `          Hello Pamme`; 

console.log(trim); 
console.log(trim.trimStart()); 

let end = `Pamme Loved          `; 

console.log(end); 
console.log(end.trimEnd()); 

// Optional Catch biding (pasar opcional el parámetro error de catch):
/* try { */
/*  */
/* }catch(error) { */
/*     error */
/* } */
/* // */
/* try { */
/*  */
/* }catch { */
/*     error */
/* } */

// FromEntries (Pasar una array(matriz) a un objeto):
// Object = Mayúscula / " " PARA SEPARACIÓN.
let friends = [["Name", "mau"], ["age", 32] ]; 
console.log(Object.fromEntries(friends)); 

let friend = [["name", "Pamme"], ["age", 29], ["country", "MX"], ["City", "CDMX"]]; 
console.log(Object.fromEntries(friend)); 


// Symbol Object

let mySymbol = "My Symbol"; 
let symbol = Symbol(mySymbol); 
console.log(symbol.description); 


// TC39 (Grupo de desarrolladores):