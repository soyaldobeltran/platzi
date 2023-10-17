const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const btnMascotaJugador = document.getElementById('btn-mascota');
const btnReiniciar = document.getElementById('btn-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = [];
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let mascotaHipodoge 
let mascotaCapipepo 
let mascotaRatigueya 
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let btnFuego
let btnTierra 
let btnAgua 
let botones = []
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

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
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

mokepones.push(hipodoge, capipepo, ratigueya)


function startGame(){
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon)=> {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        mascotaHipodoge = document.getElementById('Hipodoge')
        mascotaCapipepo = document.getElementById('Capipepo')
        mascotaRatigueya = document.getElementById('Ratigueya')
    })

    sectionReiniciar.style.display = 'none'
    btnMascotaJugador.addEventListener('click', checkMascotaJugador);
    btnReiniciar.addEventListener('click', reiniciarGame)
}
function checkMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    if (mascotaHipodoge.checked){
        spanMascotaJugador.innerHTML = mascotaHipodoge.id
        mascotaJugador = mascotaHipodoge.id
    }else if (mascotaCapipepo.checked){
        spanMascotaJugador.innerHTML = mascotaCapipepo.id
        mascotaJugador = mascotaCapipepo.id
    }else if (mascotaRatigueya.checked){
        spanMascotaJugador.innerHTML = mascotaRatigueya.id
        mascotaJugador = mascotaRatigueya.id
    }else {
        alert('Aún no has seleccionado a una Mascota')
        reiniciarGame()
    }

    extraerAtaques(mascotaJugador)
    checkMascotaEnemigo()
}
function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }  
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button id=${ataque.id} class="btn-ataque BAtaque" id="btn-fuego">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += ataquesMokepon 
    })

    btnFuego = document.getElementById('btn-fuego');
    btnTierra = document.getElementById('btn-tierra');
    btnAgua = document.getElementById('btn-agua');
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque(){
    botones.forEach((boton)=> {
        boton.addEventListener('click',(e)=>{
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            ataqueAleatorioEnemigo()
        })
    })

}

function checkMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
    secuenciaAtaque()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}
function iniciarPelea() {
    if (ataqueJugador.length === 5){
        combate()
    }
}
function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        console.log(ataqueJugador[index])
    }
    
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

