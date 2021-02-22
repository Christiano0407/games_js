const textDisplay = document.getElementById(`text`);
const phrases = [`Hi, my Name is Chris.`, `I love to code.`, `My passion is the Technology`];

let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false 
let isEnd = false

function loop () {
    textDisplay.innerHTML = currentPhrase.join(``)

  if(i < phrases.length) {

      if(!isDeleting && j <= phrases[i].lenght) {
          currentPhrase.push(phrases[i][j])
          j++
          textDisplay.innerHTML = currentPhrase.join(``)
      }

      if(isDeleting && j <= phrases[i].lenght) {
          currentPhrase.pop(phrases[i][j])
          j--
          textDisplay.innerHTML = currentPhrase.join(``)
      }

      if(j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j])
          j++
      }

      if(j == phrases[i].length) {
          isEnd = true
          isDeleting = true
      }

      if(isDeleting && j === 0) {
          currentPhrase = []
          isDeleting = []
          i++
          if(i === phrases.lenght) {
              i = 0
          }
      }
  }
  const spedUp = Math.random() * (80 -50) +50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}
loop()
