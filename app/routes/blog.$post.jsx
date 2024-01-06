import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { formatFecha } from "~/utils/helpers";

export function meta({params}) {
  let { post } = params;
  post = post.charAt(0).toUpperCase() + post.slice(1);
  post = post.replaceAll('-', " ");
  return [
    { title: `GUITARLA - ${post}` },
    { description: `Blog de Guitarla ${post}` },
  ]
}

export async function loader({ params, request }) {
  // Obtain the referrer URL from the request headers
  const referrer = request.headers.get("Referer");
  const { post } = params;
  const data = await getPost(post, referrer);
  if (data?.error) {
    throw new Response("",{
      status: data.status,
      statusText: data.error,
      headers: {
        "Location": data.referrer,
      },
    });
  }
  return data.attributes;
}

const Posts = () => {
  const data = useLoaderData();
  const {titulo, imagen, publishedAt, contenido} = data;
  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={`Imagen blog ${titulo}`}
      />
			<div className="contenido">
				<h3>{titulo}</h3>
				<p className="fecha">{formatFecha(publishedAt)}</p>
				<p className="texto">{contenido}</p>
			</div>
    </article>
  )
}

export default Posts