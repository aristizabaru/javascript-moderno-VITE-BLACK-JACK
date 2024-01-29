/**
 * Desactiva los botones de un array de elementos HTML
 * @param {Array} botones - Array de botones
 */
export function desactivarBotones(botones) {
    if (!botones || botones.length === 0) throw new Error('No hay botones')

    botones.forEach(boton => {
        boton.disabled = true
    })
}