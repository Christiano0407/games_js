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
  if(family[0] === "Mau"){
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
  
  if(family[1] === "Pamme"){
    console.log(`Ella es ${family[1]}, y ella es ${relacion.amiga} `)
 }else {
   console.log("No tenemos registro"); 
 }

}
help(); 

function printNumber() {
  let number = 10; 

  for(let i = 0; i < number; i++ ) {
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