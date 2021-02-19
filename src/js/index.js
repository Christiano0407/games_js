document.addEventListener(`DOMContentLoaded`, () => {

    const prince = document.querySelector(`.character`);
    let bottom = 0
    let gravity = 0.9
    let isJumping = false
    let isGoingLeft = false
    let left = 0
    let leftTimeId

    function jump() {
        //Not Jump
        if(isJumping) return
        //Intervalo establecido
        let timerUpId = setInterval( function () {

            if(bottom > 250) {
                clearInterval(timerUpId)
                let timerDownId = setInterval( function () {
                    if(bottom < 0) {
                        clearInterval(timerDownId)
                        isJumping = false
                    }
                    bottom -=5
                    prince.style.bottom = bottom + `px`
                }, 20)
            }

            isJumping = true
            bottom += 30
            bottom = bottom * gravity
            console.log(bottom);
            //manipular el CSS
            prince.style.bottom = bottom + `px`
        }, 20)
    }

    function slideLeft () {
        isGoingLeft = true
        leftTimeId = setInterval(function() {
            console.log(`Going-left`)
            left -=5
            prince.style.left = left + `px`
        },20)
    }

    //Assign function to keycodes
    function control(e) {
        if(e.keyCode === 38) {
            jump()
        }else if(e.keyCode === 37) {
            slideLeft() // If we press left
        }
    }
    document.addEventListener(`keydown`, control)
});