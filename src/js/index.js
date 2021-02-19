document.addEventListener(`DOMContentLoaded`, () => {

    const prince = document.querySelector(`.character`);
    let bottom = 0
    let gravity = 0.9
    let isJumping = false
    let isGoingLeft = false
    let left = 0
    let leftTimeId
    let isGoingRight = false
    let rightTimerId

    function jump() {
        //Not Jump
        if(isJumping) return
        prince.classList.add(`character`)
        prince.classList.remove(`character-sliding`)
        //Intervalo establecido
        let timerUpId = setInterval( function () {
             //Jump-Down
            if(bottom > 250) {
                clearInterval(timerUpId)
                let timerDownId = setInterval( function () {
                    if(bottom < 0) {
                        clearInterval(timerDownId)
                        isJumping = false
                    }
                    bottom -=5
                    bottom = bottom * gravity
                    prince.style.bottom = bottom + `px`
                }, 20)
            }

            //Jump-Up
            isJumping = true
            bottom += 30
            bottom = bottom * gravity
            console.log(bottom);
            //manipular el CSS
            prince.style.bottom = bottom + `px`
        }, 20)
    }

    function slideLeft () {
        prince.classList.add(`character`)
        prince.classList.remove(`charcater-sliding`)

        if(isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
        }

        isGoingLeft = true
        leftTimeId = setInterval(function() {
            console.log(`Going-left`)
            left -=5
            prince.style.left = left + `px`
        },20)
    }

    function slideRight () {
        prince.classList.add(`character-sliding`)
        prince.classList.remove(`character`)

        if(isGoingLeft) {
            clearInterval(leftTimeId)
            isGoingLeft = false
        }

        isGoingRight = true
        rightTimerId = setInterval(function () {
            console.log(`Go to Right`);
            left +=5
            prince.style.left = left +`px`
        },20)
    }

    //Assign function to keycodes
    function control(e) {
        if(e.keyCode === 39) {
            slideRight() // Right arrow on our Keybor - if we press
        }else if(e.keyCode === 38) {
            jump() // If we press  the up arrow
        }else if(e.keyCode === 37) {
            slideLeft() // if we press left 
        }
    }
    document.addEventListener(`keydown`, control)
});