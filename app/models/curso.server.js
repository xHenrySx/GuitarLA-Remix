export async function getCurso(referrer="/") {
    const res = await fetch(`${process.env.BASE_URL}/curso?populate=imagen`)
    const cursoData = await res.json()
    if (cursoData.data.length === 0) {
        return {
            status: 404,
            error: "Curso no encontrado",
            "referrer": referrer,
        }
    }
    return cursoData.data
}
