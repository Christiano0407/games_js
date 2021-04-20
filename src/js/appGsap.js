console.log("Hello World");

// GSAP

//SET (nos permite recoger el elemento, y editarlo).
/* gsap.set(`#icon`, { */
/*     width:300 */
/* }) */
//TO (presenta el estado en el que va a cambiar tu diseño).
/* gsap.to(`#icon`, { */
/*     rotation:25, */
/*     duration: 3,  */
/*     x:300,  */
/*     ease: `elastic` */
/* });  */

// OBJECT

//From (Muy parecido a to pero, muestra el estado dónde comienza).
/* gsap.from(`#icon`, { */
/*   opacity: 0,  */
/*   duration: 2 */
/* });  */
/*  */
// Tween (permite realizar animaciones a cualquier tipo).
/* let Tween = gsap.from(`.mars`, { */
/*    duration: .5,  */
/*    y: -200,  */
/*    scale:0,  */
/*    stagger: 0.5, */
/*    delay:3 */
/* });  */
/*  */
//TL (timeLine es un secuenciador para las animaciones==no se revuelvan).tl.from(`.mars`, {

/* tl.from(`.mars`, { */
/* duration: 1,  */
/* stagger: .5 */
/* }) */
/* let tl = gsap.timeline({repeat: 1, yoyo:true});  */
/* tl.from(`#mer`, { */
/*     duration: 3,  */
/*     rotate: 360 */
/* });  */

//ROCK
gsap.to(`#rocks`, {
    duration: 3, 
    rotation: 30, 
    x: 400, 
    ease: `elastic`
}); 

let tween = gsap.to(`.planet`, {
  rotation: 360, duration: 5, ease: `elastic`
}); 

