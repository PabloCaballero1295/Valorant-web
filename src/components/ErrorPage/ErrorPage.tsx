import styles from "./ErrorPage.module.css"
import error_image from "../../assets/error-image.png"
import { Link, ScrollRestoration } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <div className="container container_background">
      <div className={styles.error_content}>
        <div className={styles.title}>
          Oops... parece que ha habido un error
        </div>
        <div className={styles.message}>
          Parece que el contenido al que intentas acceder no existe o no es
          accesible en este momento.
        </div>
        <img src={error_image} className={styles.error_image} />
        <Link to="/" className={styles.button}>
          {" "}
          Volver a la página principal
        </Link>
      </div>
      <ScrollRestoration />
    </div>
  )
}
