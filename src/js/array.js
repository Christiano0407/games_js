console.log("Array"); 

const frutas = ["Manzana", "Plátano", "Sandía", "Pera", "Naranja"]; 

if(frutas.length === 5 || frutas[0] === "Manzana") {
   console.log("Estás en lo correcto"); 
}else {
    console.log("Lo siento!"); 
}; 

console.log(frutas); 

    //Métodos
//lenght
//push (Agregar al final del array)
const masFrutas = frutas.push("Mango"); 
console.log(frutas); 
//pop (eliminar el último elemento del array)
const quitar = frutas.pop("Mango"); 
console.log(frutas.length); 
console.log(frutas); 

//unshift (Agregar un elemento al inicio del array)
const primero = frutas.unshift("Uvas"); 
console.log(frutas.length); 
console.log(frutas); 

//shift ( Eliminar el elemento que está al inicio)

//indexOf( Agregar un elemento). 

//

