export const formatFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}