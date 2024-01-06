import { useState } from "react";
import { getGuitarra } from "../models/guitarras.server";
import { Form, useLoaderData, useOutletContext } from "@remix-run/react";

export function meta({ params }) {
  let { guitarra } = params;
  guitarra = guitarra.charAt(0).toUpperCase() + guitarra.slice(1);
  return [
    { title: `GUITARLA - ${guitarra}` },
    { description: `Venta de Guitarra ${guitarra}` },
  ];
}

export async function loader({ params, request }) {
  // Obtain the referrer URL from the request headers
  const referrer = request.headers.get("Referer");
  const { guitarra } = params;
  const data = await getGuitarra(guitarra, referrer);
  if (data?.error) {
    throw new Response("", {
      status: data.status,
      statusText: data.error,
      headers: {
        Location: data.referrer,
      },
    });
  }
  return data;
}

const Guitarras = () => {
  const {agregarCarrito} = useOutletContext();
  const [cantidad, setCantidad] = useState(0);
  const data = useLoaderData();
  const { nombre, descripcion, precio, imagen } = data.attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debe seleccionar una cantidad");
      return;
    }

    const guitarraSeleccionada = {
      id: data.id,
      imagen: imagen?.data?.attributes?.url,
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
    };
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={nombre}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
        <Form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>
          <select
            id="cantidad"
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al Carrito" />
        </Form>
      </div>
    </div>
  );
};

export default Guitarras;
