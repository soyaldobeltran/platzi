
function startGame(){
    let btnMascotaJugador = document.getElementById('btn-mascota');
    btnMascotaJugador.addEventListener('click', checkMascotaJugador);
}
function checkMascotaJugador(){
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
    }
}

window.addEventListener('load', startGame)

