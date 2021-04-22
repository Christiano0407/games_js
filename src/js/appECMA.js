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

// Arrow Function Promesas y Parámetros: 
let names = "Nombres" ; 
let ages = 32; 

let obj2 = { names, ages };

console.log(obj2);

//MAP (methos):
const friends = [
  {name: `Luisa`, age: 30}, 
  {name: `Alma`, age: 25},
  {name: `Pamme`, age: 29, status: "soltera"}
]
let myFriends = friends.map(function(item) {
    return item.status
}); 
console.log(myFriends);

let myName = friends.map((items) => {
   console.log(items.name); 
}); 

let myGirl = friends.map((girls) => {

   console.log(girls.name); 

  if(friends.name === "Luisa", "Alma", "Pamme") {
    console.log("Ellas son mis amigas");
  }else {
    console.log("Lo siento, no me hablan"); 
  }

}); 
/*  */
/* const hola = () => { */
/*    */
/* } */
/*  */

// PROMESAS: 
const helloPromise = () => {

  return new Promise((resolve, reject) => {
  
    if(true) {
       resolve(`Muy Bien`);  
    }else {
       reject(`Lo siento`); 
    }
  }); 

}

helloPromise()
.then(response => console.log(response))
.then(() => console.log(`Hello, Hey!`))
.catch(error => console.log(error)); 


// ARROW FUNCTION:

/*  arrow = () => { */
/*    */
/*  } */


// Clases and Módulos and Generadores


//          ====== ECM 7 ======

//          ======  ECM 8 =======

//          ====== ECM 9 ========

//          ====== ECM 10 =======

