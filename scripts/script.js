const htmlBody = document.querySelector('body')
console.log(htmlBody)

htmlBody.addEventListener('mousemove', dynaBack)


function dynaBack(e){
  console.log(e)
  document.body.style.background = `linear-gradient(195deg,rgba(0,${e.screenX/2},0,.3),white,rgba(0,${e.screenY/2},0,.5))`
}
