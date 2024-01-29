/**
 * Crea un nuevo deck de cartas
 * @param {Array<String>} tiposDeCartas - ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales - ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas) throw new Error('tiposDeCartas son obligatorios')
    if (tiposDeCartas.length === 0) throw new Error('tiposDeCartas tiene que ser un arreglo de strings')
    if (!tiposEspeciales) throw new Error('tiposEspeciales son obligatorios')
    if (tiposEspeciales.length === 0) throw new Error('tiposEspeciales tiene que ser un arreglo de strings')

    const deck = []

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(`${i}${tipo}`)
        }
    }

    for (let tipo of tiposDeCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(`${esp}${tipo}`)
        }
    }

    return deck
}