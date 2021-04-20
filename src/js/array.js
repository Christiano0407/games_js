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

//  Métodos de recorrido ARRAY

//A) Filter: Filtando elementos

let articulos = [
    {nombre: "Laptop", costo: 11500}, 
    {nombre: "Monitor", costo: 15000}, 
    {nombre: "SSD", costo: 1500}, 
    {nombre: "teclado", costo: 1700}, 
    {nombre: "Mouse", costo: 1200}, 
    {nombre: "Micrófono", costo: 6000}, 
    {nombre: "PCGammer", costo: 19500}, 
    {nombre: "LuzLed", costo: 1150}, 
]; 

console.log(articulos);

let articulosFiltrados = articulos.filter(function(articulo) {
   return articulo.costo <= 1700
}); 

console.log(articulosFiltrados); 

let presupuesto = articulos.filter(function(money) {
   return money.costo >= 1500
}); 

console.log(presupuesto); 

const more = articulos.push({nombre: "GreenScreen", costo: 1550}); 
console.log(articulos); 

//B) Map (Ayudar a mapear artículos y generar un nueo array).

let productoss = [
    {nombre: "Laptop", costo: 11500}, 
    {nombre: "Monitor", costo: 15000}, 
    {nombre: "SSD", costo: 1500}, 
    {nombre: "teclado", costo: 1700}, 
    {nombre: "Mouse", costo: 1200}, 
    {nombre: "Micrófono", costo: 6000}, 
    {nombre: "PCGammer", costo: 19500}, 
    {nombre: "LuzLed", costo: 1150}, 
    {nombre: "Celular", costo: 22500}, 
]; 

let productosNuevos = productoss.map(function(producto) {
   return producto.nombre
}); 
console.log(productosNuevos); 

let masProducto = productoss.push({nombre: "Lámpara Led", costo: 1800, color: "Blanco"}); 
console.log(productoss); 

let coloresProducto = productoss.map(function(lumen) {
    return lumen.color
}); 
console.log(coloresProducto); 

// C) FIND( Nos ayudará a encontrar algo dentro del artículo o lista de producto)
let Comercio = [
    {nombre: "Laptop", costo: 11500}, 
    {nombre: "Monitor", costo: 15000}, 
    {nombre: "SSD", costo: 1500}, 
    {nombre: "teclado", costo: 1700}, 
    {nombre: "Mouse", costo: 1200}, 
    {nombre: "Micrófono", costo: 6000}, 
    {nombre: "PCGammer", costo: 19500}, 
    {nombre: "LuzLed", costo: 1150}, 
    {nombre: "Celular", costo: 22500}, 
]; 

let nuevoComercio = Comercio.find(function(caja) {
    return caja.nombre === "PCGammer"
}); 

console.log(nuevoComercio); 

// D) forEach( Filtrando datos y me regresa por cada uno) / No poner variable.
let gamers = [
    {nombre: "Laptop", costo: 11500}, 
    {nombre: "Monitor", costo: 15000}, 
    {nombre: "SSD", costo: 1500}, 
    {nombre: "teclado", costo: 1700}, 
    {nombre: "Mouse", costo: 1200}, 
    {nombre: "Micrófono", costo: 6000}, 
    {nombre: "PCGammer", costo: 19500}, 
    {nombre: "LuzLed", costo: 1150}, 
    {nombre: "Celular", costo: 22500}, 
]; 

gamers.forEach(function(juego) {
   console.log(juego.nombre); 
}); 

gamers.forEach(function(play) {
 console.log(play.costo); 
}); 


// E) some()(Validación de verdadero o falso). Genera un nuevo Array.
let playing = [
    {nombre: "Laptop", costo: 11500}, 
    {nombre: "Monitor", costo: 15000}, 
    {nombre: "SSD", costo: 1500}, 
    {nombre: "teclado", costo: 1700}, 
    {nombre: "Mouse", costo: 1200}, 
    {nombre: "Micrófono", costo: 6000}, 
    {nombre: "PCGammer", costo: 19500}, 
    {nombre: "LuzLed", costo: 1150}, 
    {nombre: "Celular", costo: 22500}, 
]; 

let newPlayer = playing.some(function(start) {
   return  start.costo <= 1500
}); 

console.log(newPlayer); 





