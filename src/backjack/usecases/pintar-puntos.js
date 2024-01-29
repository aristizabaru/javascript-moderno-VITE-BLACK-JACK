/**
 * Pinta los puntos en el DOM
 * @param {Object} element - HTML element
 * @param {Number} puntos - Puntos que se deben pintar
 */
export const pintarPuntos = (element, puntos) => {
    if (!element) throw new Error('Falta elemento donde se pintarán los puntos')
    if (!puntos) throw new Error('Faltan puntos')

    element.innerText = puntos
}