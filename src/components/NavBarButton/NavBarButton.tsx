import styles from "./NavBarButton.module.css"
import { Link } from "react-router-dom"

interface NavBarButtonProps {
  text: string
  to: string
}

export const NavBarButton = ({ text, to }: NavBarButtonProps) => {
  return (
    <Link to={to} className={styles.navbar_button}>
      {text}
    </Link>
  )
}
