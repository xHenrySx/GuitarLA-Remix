import Guitarra from "./guitarra";
import propTypes from "prop-types";

const GuitarrasList = ({guitarras}) => {
  return (
    <>
      <h2 className="heading">Nuestra Colección</h2>
      <div className="guitarras-grid">
        {guitarras.map((guitarra) => (
          <Guitarra guitarra={guitarra?.attributes} key={guitarra?.id} />
        ))}
      </div>
    </>
  );
};

GuitarrasList.propTypes = {
  guitarras: propTypes.array.isRequired,
}

export default GuitarrasList;
