export async function getGuitarras() {
    const res = await fetch(`${process.env.BASE_URL}/guitarras?populate=imagen`)
    const guitarras = await res.json()
    return guitarras.data
}

export async function getGuitarra(guitarra, referrer="/") {
    const res = await fetch(`${process.env.BASE_URL}/guitarras?filters[url]=${guitarra}&populate=imagen`)
    const guitarraData = await res.json()
    if (guitarraData.data.length === 0) {
        return {
            status: 404,
            error: "Guitarra no encontrada",
            "referrer": referrer,
        }
    }
    return guitarraData.data[0]
}