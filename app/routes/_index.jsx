import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/post.server";
import { getCurso } from "~/models/curso.server";
import GuitarrasList from "~/components/guitarras-list";
import Curso from "~/components/curso";
import PostList from "~/components/posts-list";
import guitarras from "~/styles/guitarras.css";
import post from "~/styles/blog.css";
import curso from "~/styles/curso.css";
export function meta() {
  return [
    {
      title: "GuitarLA",
    },
    {
      name: "description",
      content: "Venta de guitarras, musica, blog, carrito de compras, tienda",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: guitarras,
    },
    {
      rel: "stylesheet",
      href: post,
    },
    {
      rel: "stylesheet",
      href: curso,
    }
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitarras,
    posts,
    curso
  };
}
const Index = () => {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <GuitarrasList guitarras={guitarras} />
      </main>
    <Curso curso={curso.attributes} />
      <section className="contenedor">
        <PostList posts={posts} />
      </section>
    </>
  );
};

export default Index;
