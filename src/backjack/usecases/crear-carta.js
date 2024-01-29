/**
 * Crea una carta en el DOM de acuerdo al turno del jugador
 * @param {String} carta 
 * @return {Object} retorna el objeto de la carpta HTML
 */
export const crearCarta = (carta) => {

    if (!carta) throw new Error('La carta es obligatoria')

    const imgCarta = document.createElement('img')
    imgCarta.classList.add('carta')
    imgCarta.src = `./assets/cartas/${carta}.png`

    return imgCarta
}