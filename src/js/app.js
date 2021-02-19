//Todo el projecto se ejecuta en el DOM(HTML).
document.addEventListener(`DOMContentLoaded`, () => {

    const grid = document.querySelector(`.grid`);
    const doodler = document.createElement(`div`);
    let doodlerLeftSpace = 50
    let platforms = []
   /*  let doodlerBottomSpace = startPoint */


    //Platform

    //Doodler
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add(`doodler`)
        doodlerLeftSpace = platforms[0].left
        doodler.style.left = doodlerLeftSpace + `px`
        doodler.style.bottom = doodlerBottomSpace + `px`
    }
    createDoodler(); 

    //Assing Function To KeyCodes

    //Start

});