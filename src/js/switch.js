console.log("Switch"); 

let numeros = [1, 2, 3, 4, 5, 50, 500, 1500]; 

switch (numeros[5]) {
    case 50:
         console.log("Exactamente!"); 
         break
    case 5: 
        console.log("Lo siento mucho pero, no es el número"); 
        break; 
    case 500:
        console.log("No!! Ya es mucho el numero"); 
        break
        default: 
            console.log("No tienes nada!"); 
}; 

const person = {
    nombre: "Alma", 
    pais: "México",
}

switch (person.nombre) {
    case "Alma": 
          console.log("Sí, es ella!");
          break; 
    case "Luisa": 
          console.log("No, no es ella");
          break; 
    case "Daniela":
          console.log("No sé ni quién es ella"); 
          break; 
          default: 
             console.log("Ya no hay nadie!") 
}; 