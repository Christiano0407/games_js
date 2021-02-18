document.addEventListener(`DOMContentLoaded`, () => {

    const prince = document.querySelector(`.character`);
    let bottom = 0

    function jump() {
        //Intervalo establecido
        let timerId = setInterval( function () {

            if(bottom > 250) {
                clearInterval(timerId)
            }

            bottom += 30
            //manipular el CSS
            prince.style.bottom = bottom + `px`
        }, 20)
    }

    //Assign function to keycodes
    function control(e) {
        if(e.keyCode === 38) {
            jump()
        }
    }
    document.addEventListener(`keydown`, control)
});