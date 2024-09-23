import { NavBarButton } from "../NavBarButton/NavBarButton"
import styles from "./NavBar.module.css"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"
import { Link } from "react-router-dom"
import valorant_logo from "../../assets/logo_valorant.png"

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_content}>
        <div className={styles.navbar_left_content}>
          <Link to="/" className={styles.web_logo}>
            <img src={valorant_logo} className={styles.valorant_logo} />
            <div className={styles.web_name}>Valorant</div>
          </Link>
        </div>

        <div className={styles.navbar_right_content}>
          <NavBarButton text="Agentes" to="/agents" />
          <NavBarButton text="Mapas" to="/maps" />
          <NavBarButton text="Armas" to="/weapons" />
        </div>

        <div className={styles.navbar_right_content_mobile}>
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
