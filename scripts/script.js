const htmlBody = document.querySelector('body')
console.log(htmlBody)

htmlBody.addEventListener('mousemove', dynaBack)


function dynaBack(e){
  console.log(e)
  document.body.style.background = `linear-gradient(${220-Math.sqrt(4*e.screenY)}deg,rgba(0,${e.screenX+200},0,${(e.screenY/1500)+(e.screenX/3000)}),white,rgba(0,${e.screenX+100},0,${(150/e.screenY)+e.screenX/2000}))`
}
