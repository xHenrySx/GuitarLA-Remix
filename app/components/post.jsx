import { Link } from "@remix-run/react";
import PropTypes from "prop-types";
import { formatFecha } from "../utils/helpers";


const Post = ({ post }) => {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return (
    <article className="post">
      <img
        className="imagen"
        src={imagen?.data.attributes.formats.medium.url}
        alt={`Imagen blog ${titulo}`}
      />
			<div className="contenido">
				<h3>{titulo}</h3>
				<p className="fecha">{formatFecha(publishedAt)}</p>
				<p className="resumen">{contenido}</p>
				<Link to={`/blog/${url}`} className="enlace">Leer post</Link>
			</div>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
