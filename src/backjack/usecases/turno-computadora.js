import { crearCarta } from "./crear-carta"
import { pedirCarta } from "./pedir-carta"
import { pintarPuntos } from "./pintar-puntos"
import { valorCarta } from "./valor-carta"

/**
 * Dispara el turno de la computadora
 * @param {Number} puntosMinimos - puntos para mínimos para empatar
 * @param {Array<String>} deck 
 * @param {Object} divPuntos - elemento donde se deben pintar los puntos
 * @param {Object} divCartas - elemento donde se deben pintar las cartas
 * @returns {Number} - puntos de la computadora
 */
export const turnoComputadora = (puntosMinimos, deck, divPuntos, divCartas) => {

    if (!puntosMinimos || puntosMinimos < 0) throw new Error('puntosMinimos es obligatorio')
    if (!deck) throw new Error('El deck es obligatorio')
    if (!divPuntos || !divCartas) throw new Error('Faltan elementos HTML: divPuntos - divCartas')

    let puntosComputadora = 0

    do {
        const carta = pedirCarta(deck)
        puntosComputadora += valorCarta(carta)
        pintarPuntos(divPuntos, puntosComputadora)
        const cartaHTML = crearCarta(carta)
        divCartas.append(cartaHTML)

        if (puntosMinimos > 21) break

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21))

    return puntosComputadora

}