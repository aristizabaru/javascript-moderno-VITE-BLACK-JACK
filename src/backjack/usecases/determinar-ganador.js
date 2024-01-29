/**
 * Determina el ganador
 * @param {Number} puntosComputadora 
 * @param {Number} puntosJugador 
 */
export function determinarGanador(puntosComputadora, puntosJugador) {

    if (!puntosComputadora || !puntosJugador) throw new Error('Faltan puntos')

    if (puntosComputadora === puntosJugador) {
        alert('Nadie gana')
    } else if (puntosJugador > 21) {
        alert('Computadora gana')
    } else if (puntosComputadora > 21) {
        alert('Jugador gana')
    } else {
        alert('Computadora gana')
    }

}