import { NavBarButton } from "../NavBarButton/NavBarButton"
import "./NavBar.css"
import { DropdownMenu } from "../DropdownMenu/DropdownMenu"

export const NavBar = () => {
  function scrollToElement(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div
          className="navbar-left-content"
          onClick={() => {
            scrollToElement("home")
          }}
        >
          VALORANT
        </div>

        <div className="navbar-right-content">
          <NavBarButton text="Agentes" />
          <NavBarButton text="Mapas" />
        </div>

        <div className="navbar-right-content-mobile">
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
