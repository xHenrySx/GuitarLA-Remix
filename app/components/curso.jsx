import React from "react";
import propTypes from "prop-types";

const Curso = ({ curso }) => {
    const { contenido, imagen, titulo } = curso;
    return (
        <section className="curso">
            <style>{`
                .curso {
                    background-image: linear-gradient(
                        to right,
                        rgb(0 0 0 / .65),
                        rgba(0 0 0 / .7)
                    ),
                    url(${imagen.data.attributes.url});
                }
            `}</style>
            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{titulo}</h2>
                    <p className="texto">{contenido}</p>
                </div>
            </div>
        </section>
    );
};

Curso.propTypes = {
    curso: propTypes.object.isRequired,
};

export default Curso;
