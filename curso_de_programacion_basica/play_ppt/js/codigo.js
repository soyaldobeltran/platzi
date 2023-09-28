document.addEventListener("DOMContentLoaded", function(){
    // Haze que la pc elija al azar
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    //Esta funcion sirve para que se muestre (vez) cuando triunfo o perdida sea = 1
    function singularWord(typeResult){
        let result = ""
        if(typeResult == 1){
        result = " vez. "
        }else{
            result = " veces. "
        }
        return result
    }

    //Esta función fue creada para imprimir el resultado de la elección
    function eleccion(jugada){
        let resultado = ""
        if(jugada == 1){
            resultado = "Piedra 🪨"
        } else if(jugada == 2){
            resultado = "Papel 🧻"
        }else if(jugada == 3){
            resultado = "Elige ✂️"
        } else {
            resultado = "Elección Erronea ❌"
        }
        return resultado
    } 
    
    //Esta función contiene el juego
    function play(){
            //1 es piedra, 2 papel, 3 es tijera
        let jugador = 0
        let pc = aleatorio()
        let triunfos = 0
        let perdidas = 0
        
        while (triunfos < 3 && perdidas < 3){
            pc = aleatorio(1,3)
            jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

            alert("Tu eliges: " + eleccion(jugador))
            alert("PC elige: " + eleccion(pc))
            
            //COMBATE
            if(pc == jugador){
                alert("Empate")
            } else if(jugador == 1 && pc == 3){
                alert("GANASTE")
                triunfos = triunfos + 1
            } else if (jugador == 2 && pc == 1){
                alert("Ganaste")
                triunfos = triunfos + 1
            } else if (jugador == 3 && pc == 2){
                alert("Ganaste")
                triunfos = triunfos + 1
            } else {
                alert("Perdiste")
                perdidas = perdidas + 1
            }
        }
        let vez_triunfos = singularWord(triunfos)
        let vez_perdidas = singularWord(perdidas)
        
        alert("Ganaste " + triunfos + vez_triunfos +"Perdiste "+ perdidas + vez_perdidas)
    
    }
    
    const startGameButton = document.getElementById("start_game")
    startGameButton.addEventListener("click", function(){
        play()
    })

    //Iniciar Juego al dar click

})