import { NavBarButton } from "../NavBarButton/NavBarButton"
import styles from "./NavBar.module.css"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_content}>
        <div className={styles.navbar_left_content}>
          <Link to="/">Valorant</Link>
        </div>

        <div className={styles.navbar_right_content}>
          <NavBarButton text="Agentes" to="/agents" />
          <NavBarButton text="Mapas" to="/maps" />
        </div>

        <div className={styles.navbar_right_content_mobile}>
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
