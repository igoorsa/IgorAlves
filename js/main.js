// Animate Name
const name = document.querySelector('#name').innerHTML;
let ping = document.createElement('div')
ping.className = "ping"
document.querySelector("#nameAnimate").appendChild(ping)    
ping.innerHTML = "|" 


setInterval(()=>{
    ping.classList.toggle('transition')
}, 500)

function animateName(x){
    const nameAnimado = x.toUpperCase()
    const nameTamanho = x.length-2
    i = 0
    document.querySelector('#name').innerHTML = ""
    time = setInterval(()=>{
        i > nameTamanho ? clearInterval(time) : letra = nameAnimado[i]
        novaLetra = document.createElement('div')
        document.querySelector('#name').appendChild(novaLetra)
        nameAnimado[i]== " " ? novaLetra.innerHTML = ` &nbsp   &nbsp  ` : novaLetra.innerHTML = ` ${nameAnimado[i]} `
        i++
    },100)
}
animateName(name)



// DESCREVER AS HABILIDADES

const inicioHabilidades = document.querySelector('.inicio-habilidade')
const habilidades = document.querySelectorAll('.habilidade')

const html = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.html').style.display = 'flex'
}
const css = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.css').style.display = 'flex'
}
const js = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.js').style.display = 'flex'
}
const bootstrap = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.bootstrap').style.display = 'flex'
}
const jquery = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.jquery').style.display = 'flex'
}
const git = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.git').style.display = 'flex'
}
const php = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.php').style.display = 'flex'
}
const ajax = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.ajax').style.display = 'flex'
}
const vue = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.vue').style.display = 'flex'
}
const sql = () => {
  inicioHabilidades.style.display = 'none'
  for(let i = 0; i<habilidades.length; i++){habilidades[i].style.display = 'none'}
  document.querySelector('.sql').style.display = 'flex'
}




//REQUISIÇÃO AJAX PARA ENVIAR O EMAIL
var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
  setTimeout(function() {
      submitButton.value = "Enviando...";
      submitButton.disabled = true;
  }, 1);
});


//Current year
let data = new Date()
let ano = data.getFullYear()
document.querySelector("#current_year").innerHTML = ano