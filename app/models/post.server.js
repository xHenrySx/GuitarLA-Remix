export async function getPosts() {
    const res = await fetch(`${process.env.BASE_URL}/posts?populate=imagen`)
    const guitarras = await res.json()
    return guitarras.data
}

export async function getPost(post, referrer="/") {
    const res = await fetch(`${process.env.BASE_URL}/posts?filters[url]=${post}&populate=imagen`)
    const postData = await res.json()
    if (postData.data.length === 0) {
        return {
            status: 404,
            error: "Post no encontrado",
            "referrer": referrer,
        }
    }
    return postData.data[0]
}
