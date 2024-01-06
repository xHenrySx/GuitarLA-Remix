import styles from "~/styles/guitarras.css";
import { Outlet, useOutletContext } from "@remix-run/react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const Tienda = () => {
  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()} />
    </main>
  );
};

export default Tienda;
