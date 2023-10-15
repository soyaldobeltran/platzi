const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const btnMascotaJugador = document.getElementById('btn-mascota');
const btnFuego = document.getElementById('btn-fuego');
const btnTierra = document.getElementById('btn-tierra');
const btnAgua = document.getElementById('btn-agua');
const btnReiniciar = document.getElementById('btn-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const mascotaHipodoge = document.getElementById('hipodoge')
const mascotaCapipepo = document.getElementById('capipepo')
const mascotaRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let mokepones = [];
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodogue', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon ('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'},
    {nombre: '🪴', id: 'btn-tierra'},
)
capipepo.ataques.push(
    {nombre: '🪴', id: 'btn-tierra'},
    {nombre: '🪴', id: 'btn-tierra'},
    {nombre: '🪴', id: 'btn-tierra'},
    {nombre: '💧', id: 'btn-agua'},
    {nombre: '🔥', id: 'btn-fuego'},   
)
ratigueya.ataques.push(
    {nombre: '🔥', id: 'btn-fuego'}, 
    {nombre: '🔥', id: 'btn-fuego'}, 
    {nombre: '🔥', id: 'btn-fuego'}, 
    {nombre: '🪴', id: 'btn-tierra'},
    {nombre: '💧', id: 'btn-agua'},
)



function startGame(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    btnMascotaJugador.addEventListener('click', checkMascotaJugador);
    btnFuego.addEventListener('click', ataqueFuego);
    btnTierra.addEventListener('click', ataqueTierra);
    btnAgua.addEventListener('click', ataqueAgua);
    btnReiniciar.addEventListener('click', reiniciarGame)
}
function checkMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    if (mascotaHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if (mascotaCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (mascotaRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else {
        alert('Aún no has seleccionado a una Mascota')
        reiniciarGame()
    }

    checkMascotaEnemigo()
}
function checkMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    }else{
        ataqueEnemigo = 'Tierra'
    }

    combate()
}
function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('Empate 🤝')
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje('Ganaste 🎉')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje('Ganaste 🎉')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje('Ganaste 🎉')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje('Perdiste 😹🫵')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal('🎉 Felicidades! Haz GANADO la Batalla')
    }else if (vidasJugador == 0){
        crearMensajeFinal('😹🫵 PERDEDOR')
    }
}
function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    // let parrafo = document.createElement('p')
    // parrafo.innerHTML = 'Tu macota atacó con ' + ataqueJugador+ ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' -' + resultado
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    btnFuego.disabled = true
    btnTierra.disabled = true
    btnAgua.disabled = true
    sectionReiniciar.style.display = 'block'
}
function reiniciarGame(){
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)

