import { Outlet } from "@remix-run/react";
import styles from "~/styles/blog.css";

export function meta() {
  return [
    { title: "Guitarla - Blog" },
    { description: "Blog de Guitarla, Venta de guitarras" },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Blog = () => {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
  );
};

export default Blog;
