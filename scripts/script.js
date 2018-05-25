const htmlBody = document.querySelector('body')
console.log(htmlBody)

htmlBody.addEventListener('mousemove', dynaBack)


function dynaBack(e){
  console.log(e)
  document.body.style.background = `linear-gradient(${e.screenX}deg,rgba(0,${e.screenX/4},0,.3),white,rgba(0,${e.screenY/4},0,.3))`
}



/* idea for random angle

gradientAngle() {
  return Math.floor(Math.random() * 100)
}
*/
