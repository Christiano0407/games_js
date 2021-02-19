document.addEventListener(`DOMContentLoaded`, () => {
    const prince = document.getElementById(`character`);
    //Abajo
    let bottom = 0;
    let gravity = 0.9;
    // Jump 
    let isJumping = false;
    // Izquierda 
    let left = 0;
    let leftTimeId;
    let isGoingLeft = false;
    //Derecha 
    let isGoingRight = false;
    let rightTimeId;

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
     //Move to Left
    function slideLeft () {
        
        isGoingLeft = true;
        leftTimeId = setInterval(function () {
            console.log(`Going to left`)
            left -= 5
            prince.style.left = left + `px`
        }, 20)
    }
     //Move to Right
    function slideRight () {

        isGoingRight = true;
        rightTimeId = setInterval(function () {
            console.log(`Going to Right`);
            left += 5
            prince.style.left = left + `px`
        }, 20) 
    }
    //Controls
//Assing Controls 
  function control(e) {
      if(e.keyCode === 39) {
        slideRight() // Move To right
      }else if(e.keyCode === 38) {
        jump() // If we press the up arrow
      }else if(e.keyCode === 37) {
        slideLeft() // If we press Left
      }
  }
  document.addEventListener(`keydown`, control);
});