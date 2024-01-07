  import { useEffect, useState } from "react";
  import { useOutletContext } from "@remix-run/react";
  import styles from "~/styles/carrito.css";
  import { ClientOnly } from "remix-utils/client-only";

  export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }

  export function meta() {
    return [
      {
        title: "GuitarLA - Carrito de Compras",
      },
      {
        description:
          "Venta de guitarras, musica, blog, carrito de compras, tienda",
      },
    ];
  }

  const Carrito = () => {
    const [total, setTotal] = useState(0);
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

    useEffect(() => {
      const calculoTotal = carrito.reduce(
        (acc, curr) => acc + curr.precio * curr.cantidad,
        0
      );
      setTotal(calculoTotal);
    }, [carrito]);

    return (
      <ClientOnly fallback={"Cargando..."}>
        {() => (
          <main className="contenedor">
            <h1 className="heading">Carrito de Compras</h1>
            <div className="contenido">
              <div className="carrito">
                <h2>Articulos</h2>
                {carrito?.length === 0 ? (
                  <p>No hay articulos en el carrito</p>
                ) : (
                  carrito?.map((p) => {
                    return (
                      <div key={p?.id} className="producto">
                        <div>
                          <img
                            src={p.imagen}
                            alt={`imagen del producto ${p.nombre}`}
                          />
                        </div>
                        <div>
                          <p className="nombre">{p?.nombre}</p>
                          <p>Cantidad: </p>
                          <select
                            value={p?.cantidad}
                            className="select"
                            onChange={(e) => {
                              actualizarCantidad({
                                cantidad: e.target.value,
                                id: p.id,
                              });
                            }}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <p className="precio">
                            $ <span>{p?.precio}</span>
                          </p>
                          <p className="subtotal">
                            Subtotal $<span>{p?.cantidad * p?.precio}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className="eliminar"
                          onClick={() => eliminarGuitarra(p.id)}
                        >
                          X
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
              <aside className="resumen">
                <h3>Resumen del Pedido</h3>
                <p>Total a pagar: ${total}</p>
              </aside>
            </div>
          </main>
        )}
      </ClientOnly>
    );
  };

  export default Carrito;
