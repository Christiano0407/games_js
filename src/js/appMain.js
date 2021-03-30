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

function activity(a, b) {
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
imprimirEdad(29);