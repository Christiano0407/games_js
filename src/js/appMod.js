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

