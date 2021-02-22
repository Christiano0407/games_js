//Todo el projecto se ejecuta en el DOM(HTML).
document.addEventListener(`DOMContentLoaded`, () => {

    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let isGameOver = false
    let speed = 3
    let platformCount = 5
    let platforms = []
    let score = 0
    let doodlerLeftSpace = 50
    let startPoint = 150
    let doodlerBottomSpace = startPoint
    const gravity = 0.9
    let upTimerId
    let downTimerId
    let isJumping = true
    let isGoingLeft = false
    let isGoingRight = false
    let leftTimerId
    let rightTimerId



   /*  let doodlerBottomSpace = startPoint */


    //Platform

    //Doodler
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodlerLeftSpace = platforms[0].left
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
      }
    
    

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

    //Jump 
    function jump() {
     clearInterval(downTimerId)
     isJumping = true
     upTimerId = setInterval(function() {
         console.log(startPoint);
         console.log(`1`, doodlerBottomSpace)
         doodlerBottomSpace += 20
         doodler.style.bottom = doodlerBottomSpace + `px`
         console.log(`2`, doodlerBottomSpace)
         console.log(`s`, startPoint)
         if(doodlerBottomSpace > (startPoint + 200)) {
             fall()
             isJumping = false
         }
     },30)
    }

    //Fall(Fallando)
    function fall() {
        isJumping = false
        clearInterval(upTimerId)
        downTimerId = setInterval(function () {
            doodlerBottomSpace -=5
            doodler.style.bottom = doodlerBottomSpace + `px`
            if(doodlerBottomSpace <= 0) {
                gameOver()
            }
            platforms.forEach(platform => {
                if(
                    (doodlerBottomSpace >= platform.bottom) &&
                    (doodlerBottomSpace <= (platform.bottom + 15)) &&
                    ((doodlerBottomSpace + 60) >= platform.left) &&
                    (doodlerBottomSpace <= (platform.left + 85)) &&
                    !isJumping
                ){
                    console.log(`Jump!`)
                    startPoint = doodlerBottomSpace
                    jump()
                    console.log(`start`, startPoint)
                    isJumping = true
                }
            })
        },20)
    }

    //Controls Assign function to KeyCode
     function control(e) {
        doodler.style.bottom = doodlerBottomSpace + `px`
        if(e.key === `ArrowLeft`) {
            //moveLeft()
        }else if(e.key === `ArrowRight`) {
            //moveRight()
        }else if (e.key === `ArrowUp`) {
            //moveStraight()
        }
    } 

    //Game
     function gameOver() {
         console.log(`Game Over`);
        isGameOver = true
        clearInterval(upTimerId)
        clearInterval(downTimerId)
    } 

    //Start
    function start() {
        if(!isGameOver) {
            createPlatforms()
            createDoodler()
            setInterval(movePlatforms, 30)
            jump(startPoint)
        }
    }
    start()

});