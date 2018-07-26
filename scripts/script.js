dynaBack = (e) => {
  document.body.style.background = `linear-gradient(200deg,rgba(0,${e.screenX+200},0,${(e.screenY/4000)+(e.screenX/8000)}),white,rgba(0,${e.screenX+100},0,${(50/e.screenY)+e.screenX/5000}))`
}

const htmlBody = document.querySelector('body')
htmlBody.addEventListener('mousemove', dynaBack)

toggleActive = (e) => {
  console.log('running toggleActive')
  console.log(e)
  e.target.classList.toggle('active')
  e.target.nextElementSibling.nextElementSibling.classList.toggle('active')
  console.log(e.target.nextElementSibling.nextElementSibling)
}

var arrows = document.getElementsByClassName('arrow')
var i
for (i = 0; i < arrows.length; i++) {
  console.log('attaching active arrow listeners')
  arrows[i].addEventListener('click', toggleActive)
}
