console.log("Start"); 

//             === ECMA-SCRIPT===

// === VAR (Global) ============
// === LET (Local) =============
// === Const (No se mueve) =============

// ANTES DE ECMASCRIPT 6
function newFunction(name, age, country) {
  var name = name || `Luisa`; 
  var age = age || 32; 
  var country =  country || `MX`; 

  console.log(name, age, country);
}

newFunction(); 

//              ========  EC6 =======
function newFunction2(name =`Alma`, age = "30", country = `CDMX`) {
  console.log(name, age, country); 
}

newFunction2(); 

// TEMPLATE LITERALS (concatenar)
// == ANTES ==

let hello = "Hello"; 
let world = "World"; 
let newPhrase = hello + ` ` + world;

console.log(newPhrase); 

// == AHORA == 
let newPhrase2 = `${hello}, ${world} NEW`; 

console.log(newPhrase2); 

// Let and Const // Multilínea // Spreas Operators // Desestructuración.

 // NEW MULTILÍNEA
let text = `NDSKJDNCNDJKCNSKDJNSJKNDJDJCNKSDN and ncjndcnshkvbf 
ndskjndsjkcndncjkdsncjknsd
ldsnldsnlcndjlnjsncjsndjnds`; 
console.log(text);

//OPERATORS (expandir varios elementos con un ARRAY y unir elementos).
let teamMujeres = [`Luisa`, `Alma`, `Natalia`, `Diana`, `Alexa`, `Azucena`]; 

let teamHombres = [`Chris`, `Ivan`, `Mau`, `Rodrigo`, `Marco`]; 

let union = [`Pammela`, `Luis`, ...teamMujeres, ...teamHombres]; 

console.log(union);

// DESESTRUCTURACIÓN

let person = {
    name: `Oscar`, 
    age : 32, 
    country: `MX`
}; 
console.log(person.name, person.age, person.country);

//2 ====Nueva Forma)
let {name} = person;
console.log(name);

// SCOPE 
/*  var = global */
/*  let = local */
/*  const = fija */

// Arrow Function Promesas y Parámetros
let names = "Nombres" ; 
let ages = 32; 

let obj2 = { names, ages };

console.log(obj2);

// Clases and Módulos and Generadores


//          ====== ECM 7 ======

//          ======  ECM 8 =======

//          ====== ECM 9 ========

//          ====== ECM 10 =======

