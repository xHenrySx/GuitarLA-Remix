import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import GuitarrasList from "~/components/guitarras-list";

export function meta() {
  return [
    { title: "GUITARLA - Tienda de guitarras" },
    { description: "Tienda de guitarras online, Venta de Guitarras" },
  ];
}

export async function loader() {
  return await getGuitarras();
}

const Tienda = () => {
  const guitarras = useLoaderData();
  return <GuitarrasList guitarras={guitarras} />;
};

export default Tienda;
