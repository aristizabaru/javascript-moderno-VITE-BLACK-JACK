/**
 * Mezcla un deck de cartas
 * @param {Array<String>} deck 
 * @returns {Array<String>} Returna deck mezclado
 */
export const shuffleDeck = (deck) => {

    if (!deck) throw new Error('El deck es obligatorio')
    if (deck.length === 0) throw new Error('deck tiene que ser un arreglo de strings')

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }

    return deck

}