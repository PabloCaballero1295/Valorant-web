import styles from "./ErrorPage.module.css"
import error_image from "../../assets/error-image.png"
import { Link } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <div className={styles.error_page_container}>
      <div className={`container ${styles.container}`}>
        <div className={styles.error_content}>
          <div className={styles.title}>Error 404 - Página no encontrada</div>
          <div className={styles.message}>
            Parece que el contenido al que intentas acceder no existe
          </div>
          <img src={error_image} className={styles.error_image} />
          <Link to="/" className={styles.button}>
            {" "}
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  )
}
