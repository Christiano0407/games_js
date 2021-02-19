document.addEventListener(`DOMContentLoaded`, () => {
    const prince = document.getElementById(`character`);

    let bottom = 0;
    let gravity = 0.9; 
    let isJumping = false; 


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

 


    //Controls
//Assing Controls 
  function control(e) {
      if(e.keyCode === 38) {
          jump() // If we press the up arrow
      }
  }
  document.addEventListener(`keydown`, control);
});