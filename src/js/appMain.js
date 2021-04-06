var primo = "Abraham";
console.log(primo);

let people = {
    nombre : "Luisa",
    apellido :  "Richardson",
};
console.log(people); 

const person = ["Juan", "Ricardo", "Luisa", "Mau"];
console.log(person);
/* 
function miFunction() {
  let peso = {
      grasa: 50,
  }
  console.log(peso); 
}

miFunction();  */

/* function activity(a, b) {
  return a + b; 
}
console.log(activity(5, 10)); 

function saludar(saludo) {
    console.log(`Hola ${saludo}`)
}

saludar(`Buen día`); 

function imprimirEdad(edad) {
  console.log(`Hola, mi edad es de ${edad} años`); 
}
imprimirEdad(29); */

/* const double = x => x * 2

console.log(double(8)); 

const time = () => new Date().toLocaleTimeString(); 
console.log(time()); 

const isGreatThan = (value, comparison) => value > comparison
console.log(isGreatThan(5, 8));  */

const family = ["Mau", "Pamme", "Luisa", "Alejandra", "Zadri"]; 
console.log(family); 

function brothers () {
  if (family[0] === "Mau"){
     console.log(`Yo soy ${family[0]}`)
  }else {
    console.log("No tenemos registro"); 
  }
}
brothers();

function help () {
  let relacion = {
    amiga: "Natasha",
  }
  
  if (family[1] === "Pamme"){
    console.log(`Ella es ${family[1]}, y ella es ${relacion.amiga} `)
 }else {
   console.log("No tenemos registro"); 
 }

}
help(); 

function printNumber() {
  let number = 10; 

  for (let i = 0; i < number; i++ ) {
    setTimeout(() => {
      console.log(i)
    }, 100)
  }
}
printNumber(); 

const variable = () => {
   let variables = {
     var1: "Person1"
   }
   console.log(variables); 
}

variable(); 

let player = 5; 

if (player === 5) {
  console.log(true); 
}else {
  console.log("Es un valor negativo"); 
}

let game = 10; 

if (game === 10 || game == number) {
  console.log("Yes I am"); 
}else {
  console.log("Por supuesto que no!"); 
}

let shoes = "Nike"; 

if (shoes != String && shoes === "Nike") {
  console.log("Yes, is it a Nike"); 
}else {
  console.log("Not, I am sorry"); 
}

let natasha = {
  name: "Natasha",
  edad: 25,
}
let scarlett = {
  name: "Scarlett", 
  edad: 30,
}

if (natasha.edad >= scarlett.edad) {
  console.log("Me veo más grande que tú"); 
}else if (natasha.edad <= scarlett.edad) {
  console.log("Oye, soy cinco años menor que tú"); 
}else {
  console.log("Lo siento por tu edad"); 
}

natasha.name == "Natasha" ? console.log("Sí, es ella.") :  console.log("Es equivocado el nombre"); 
