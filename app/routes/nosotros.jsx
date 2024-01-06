import nosotros from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GUITARLA - Nosotros",
    },
    {
      description: "Venta de guitarras, blog de musicas."
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: nosotros,
      as: "image",
    },
  ];
}
const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={nosotros} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Donec mollis hendrerit risus. Pellentesque ut neque. Vivamus
            elementum semper nisi. Cras sagittis. Mauris turpis nunc, blandit
            et, volutpat molestie, porta ut, ligula.
          </p>
          <p>
            Curabitur at lacus ac velit ornare lobortis. Vestibulum fringilla
            pede sit amet augue. Ut id nisl quis enim dignissim sagittis.
            Vestibulum eu odio. Vestibulum dapibus nunc ac augue.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
