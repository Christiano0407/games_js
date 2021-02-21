//Todo el projecto se ejecuta en el DOM(HTML).
document.addEventListener(`DOMContentLoaded`, () => {

    const grid = document.querySelector(`.grid`);
    const doodler = document.createElement(`div`);
    let doodlerLeftSpace = 50
    let platforms = []
    let isGameOver = false; 
    let platformCount = 5


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

    //class 
    class Platform {
        constructor(newPlatBottom) {
        this.bottom = newPlatBottom
        this.left = Math.random() * 315
        this.visual = document.createElement(`div`)

        const visual = this.visual
        visual,classList.add(`platfom`)
        }
    }

    //Create Platform
  /*   function createPlatforms() {
        for (let i = 0; i < platformCount; i ++) {
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)
            Platform.push(newPlatform)
            console.log(Platform)
        }
    } */

    //Start
    function start() {
        if(!isGameOver) {
           createDoodler()
           createPlatforms()
        }
    }
    start()

});