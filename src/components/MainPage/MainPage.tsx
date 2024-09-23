import styles from "./MainPage.module.css"
import valorant_banner from "../../assets/valorant_banner.jpeg"
import valorant_agents from "../../assets/VALORANT-Agents.jpg"
import valorant_weapons from "../../assets/image_processing20230810-35-159f9vt.webp"
import valorant_maps from "../../assets/Valroant-Maps-List-you-can-play.webp"
import { Link } from "react-router-dom"

export const MainPage = () => {
  return (
    <div className={styles.main_page_container}>
      <div className={`container ${styles.container}`}>
        <img src={valorant_banner} className={styles.banner} />
        <div className={styles.page_content}>
          <div className={styles.title}>¿Qué es Valorant?</div>
          <div className={styles.game_description}>
            Valorant es un shooter táctico en primera persona de estilo hero
            shooter, desarrollado y publicado por Riot Games. En este juego, los
            jugadores toman el control de agentes, personajes que representan
            diversas culturas y nacionalidades de todo el mundo.
            <br />
            <br />
            El modo principal de juego enfrenta a dos equipos de cinco jugadores
            cada uno, que asumen los roles de atacantes o defensores. Los
            agentes poseen habilidades únicas y emplean un sistema económico
            para adquirir habilidades y armas.
            <br />
            <br />
            En esta web podrás descubrir más acerca de este juego. Para ello,
            visita los enlaces que puedes encontrar a continuación.
          </div>
          <br />
          <br />
          <div className={styles.grid_cards}>
            <Link to="/agents" className={styles.button_link}>
              <div className={styles.navigation_card}>
                <img src={valorant_agents} className={styles.card_image} />
                <div className={styles.link_title}>Agentes</div>
              </div>
            </Link>
            <Link to="/maps" className={styles.button_link}>
              <div className={styles.navigation_card}>
                <img src={valorant_maps} className={styles.card_image} />
                <div className={styles.link_title}>Mapas</div>
              </div>
            </Link>
            <Link to="/weapons" className={styles.button_link}>
              <div className={styles.navigation_card}>
                <img src={valorant_weapons} className={styles.card_image} />
                <div className={styles.link_title}>Armas</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
