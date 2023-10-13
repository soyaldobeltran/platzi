let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function startGame(){
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let btnMascotaJugador = document.getElementById('btn-mascota');
    btnMascotaJugador.addEventListener('click', checkMascotaJugador);

    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.addEventListener('click', ataqueFuego);
    let btnTierra = document.getElementById('btn-tierra');
    btnTierra.addEventListener('click', ataqueTierra);
    let btnAgua = document.getElementById('btn-agua');
    btnAgua.addEventListener('click', ataqueAgua);

    let btnReiniciar = document.getElementById('btn-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarGame)
    
}
function checkMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let hipodoge = document.getElementById('hipodoge')
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (hipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if (capipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (ratigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else {
        alert('Aún no has seleccionado a una Mascota')
        reiniciarGame()
    }

    checkMascotaEnemigo()
}

function checkMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    
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
    let sectionMensajes = document.getElementById('resultado')
    sectionMensajes.innerHTML = resultadoFinal

    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.disabled = true
    let btnTierra = document.getElementById('btn-tierra');
    btnTierra.disabled = true
    let btnAgua = document.getElementById('btn-agua');
    btnAgua.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarGame(){
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', startGame)

