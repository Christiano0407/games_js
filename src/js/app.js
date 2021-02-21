//Todo el projecto se ejecuta en el DOM(HTML).
document.addEventListener(`DOMContentLoaded`, () => {

    const grid = document.querySelector(`.grid`);
    const doodler = document.createElement(`div`);
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let platforms = []
    let isGameOver = false; 
    let platformCount = 5
    //let doodlerLeftSpace = 50
    //let startPoint = 150
    //let doodlerBottomSpace = startPoint



   /*  let doodlerBottomSpace = startPoint */


    //Platform

    //Doodler
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add(`doodler`)
        //doodlerLeftSpace = platforms[0].left
        doodler.style.left = doodlerLeftSpace + `px`
        doodler.style.bottom = doodlerBottomSpace + `px`
    }
    createDoodler(); 

    //Assing Function To KeyCodes

    //class Platform
    class Platform {
        constructor(newPlatBottom) {
            this.left = Math.random() * 315
            this.bottom = newPlatBottom
            this.visual = document.createElement('div')
      
            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }

    //Create Platform
     function createPlatforms() {
        for (let i = 0; i < platformCount; i ++) {
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)
            platforms.push(newPlatform)
            console.log(platforms) 
        }
    } 

    //MovePlatforms
    function movePlatforms() {
      if(doodlerBottomSpace > 200) {
          platforms.forEach(platform => {
              platform.bottom -= 4
              let visual = platform.visual
              visual.style.bottom = platform.bottom + `px`
          })
      }
    }

    //Game
  /*   function gameOver() {
        isGameOver = true

    } */

    //Start
    function start() {
        if(!isGameOver) {
            createPlatforms()
            createDoodler()
            setInterval(movePlatforms, 30)
        }
    }
    start()

});