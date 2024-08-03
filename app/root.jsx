import { useState, useEffect } from "react";
// import dotenv from "dotenv";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import PropTypes from "prop-types";
// dotenv.config()
export function meta() {
  return [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Guitarla - Remix" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://csstools.github.io/normalize.css/11.0.0/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
  ];
}

function App() {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];
  const [carrito, setCarrito] = useState(carritoLS);
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((g) => g.id === guitarra.id)) {
      const carritoActualizado = carrito.map((g) => {
        if (g.id === guitarra.id) {
          g.cantidad = guitarra.cantidad;
        }
        return g;
      });
      setCarrito(carritoActualizado);
      return;
    }
    setCarrito([...carrito, guitarra]);
  };

  const actualizarCantidad = (guitarra) => {
    setCarrito(
      carrito.map((g) => {
        if (g.id === guitarra.id) {
          g.cantidad = guitarra.cantidad;
        }
        return g;
      })
    );
  };

  const eliminarGuitarra = (id) => {
    setCarrito(carrito.filter((g) => g.id !== id));
  };

  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
}

export default App;

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

Document.propTypes = {
  children: PropTypes.node,
};

// Manejo de errores

export function ErrorBoundary() {
  const error = useRouteError();
  const referrer = error?.headers?.get("Location") || "/";
  // Si el error es de tipo RouteError, es porque el servidor respondió con un error
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <h1 className="error">
          {error.status} {error.statusText}
        </h1>
        <Link className="enlace" to={referrer}>
          Volver al inicio
        </Link>
      </Document>
    );
  } else {
    return (
      <Document>
        <h1 className="error">
          La ruta que estás buscando no existe o no está disponible
        </h1>
        <Link className="enlace" to={referrer}>
          Volver al inicio
        </Link>
      </Document>
    );
  }
}
