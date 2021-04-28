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

// Otra forma de estructurar: TRY y CATCH: 
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
/* const animals = { */
/*     animal1: `Mono`,  */
/*     animal2: `Jirafa`,  */
/*     animal3: `Rinoceronte`,  */
/*     animal4: `Pingüino`, */
/* } */
const datos = [{
  id: 1, 
  title: "Iron Man", 
  year: 2008
}, {
  id: 2, 
  title: "Spiderman Homecoming", 
  year: 2017
}, {
   id: 3, 
   title: "Avengers: EnGame", 
   year: 2019
}, {
    id: 4, 
    title: "Black Widow", 
    year: 2021
}]

const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve(datos)
        }, 1500)
    })
}
 /* getDatos()
 .then((datos) => console.log(datos));  */
 /* .catch((err) => console.log(err));  */

 /* ASYNC/AWAIT */

async function fetchingData () {
   const datosFetching = await getDatos(); 
   console.log(datosFetching); 
 }

 fetchingData(); 
// Two
 const song = [{
    id: 1, 
    title: "Coldplay", 
    year: 2000
  }, {
    id: 2, 
    title: "Phil Collins",
    year: 1990
  }, {
     id: 3, 
     title: "Katy Perry", 
     year: 2010
  }, {
      id: 4, 
      title: "Dua Lupa", 
      year: 2020
  }, {
      id: 5, 
      title: "BeeGees", 
      year: 1970
  }]; 

  const getSing = () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(song); 
          }, 2000); 
      }); 
  }

  async function allSing() {
      const band = await getSing(); 
      console.log(band); 
  }

  allSing();

  const refrescos = [{
      id: 1, 
      refresco: "Coca-Cola", 
      color: "Red", 
      costo: 20
  }, {
      id: 2,
      refresco: "Seven-Up", 
      color: "Green", 
      costo: 15
  }]; 
  
  const getRefrescos = () => {
      return new Promise((resolve, reject) => {
          resolve(refrescos)
      }); 
  }
  const allRefrescos = async () =>  {
      try {
        const agua = await getRefrescos();
        console.log(agua); 
      }catch (error) {
          console.log(error); 
      }
  }
  allRefrescos();  

               // ==== ECMA SCRIPT 9 =================

// Spread Operator: Oerador de reposo. 


// Porpagation Properties


// Promise Finally


// Regex

// ==== ECMA SCRIPT 10 =================
