import PropTypes from "prop-types";
import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
  const { nombre, descripcion, precio, imagen, url } = guitarra;
  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.formats.medium.url} alt={nombre} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
      <Link className="enlace" to={`/guitarras/${url}`} >
        Ver Producto
      </Link>
    </div>
  );
};

Guitarra.propTypes = {
  guitarra: PropTypes.object.isRequired,
};

export default Guitarra;
