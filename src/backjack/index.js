import {
    activarBotones,
    crearCarta,
    crearDeck,
    desactivarBotones,
    determinarGanador,
    pedirCarta,
    pintarPuntos,
    shuffleDeck,
    turnoComputadora,
    valorCarta,
} from './usecases'


let deck = []

const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0,
    puntosComputadora = 0

// Referencias HTLM
const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo')

const puntosHTLM = document.querySelectorAll('small'),
    divCartaJugadores = document.querySelectorAll('.divCartas')


const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales)
    deck = shuffleDeck(deck)

    puntosJugador = 0
    puntosComputadora = 0
    for (let index = 0; index < numJugadores; index++) {
        puntosHTLM[index].innerText = 0
        divCartaJugadores[index].innerHTML = ''
    }

    activarBotones([btnDetener, btnPedir])
}


// Eventos
btnPedir.addEventListener('click', () => {

    // Turno jugador
    const carta = pedirCarta(deck)
    puntosJugador += valorCarta(carta)
    pintarPuntos(puntosHTLM[0], puntosJugador)
    const cartaHTML = crearCarta(carta)
    divCartaJugadores[0].append(cartaHTML)

    if (puntosJugador >= 21) {
        desactivarBotones([btnDetener, btnPedir])
        puntosComputadora = turnoComputadora(puntosJugador, deck, puntosHTLM[1], divCartaJugadores[1])
        setTimeout(() => {
            determinarGanador(puntosComputadora, puntosJugador)
        }, 20)
    }

})

btnDetener.addEventListener('click', () => {
    desactivarBotones([btnDetener, btnPedir])
    puntosComputadora = turnoComputadora(puntosJugador, deck, puntosHTLM[1], divCartaJugadores[1])
    setTimeout(() => {
        determinarGanador(puntosComputadora, puntosJugador)
    }, 20)
})

btnNuevo.addEventListener('click', () => {
    inicializarJuego()
})




