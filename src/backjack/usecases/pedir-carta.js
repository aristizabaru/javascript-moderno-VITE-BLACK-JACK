/**
 * Devuelve una carta del deck
 * @param {Array<String>} deck 
 * @returns {String}
 */
export const pedirCarta = (deck) => {
    if (!deck) throw new Error('El deck es obligatorio')
    if (deck.length === 0) throw new Error('deck tiene que ser un arreglo de strings')

    return deck.pop()
}