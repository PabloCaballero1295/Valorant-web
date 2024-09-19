import "./NavBarButton.css"

interface NavBarButtonProps {
  text: string
}

export const NavBarButton = ({ text }: NavBarButtonProps) => {
  return <a className="navbar-button">{text}</a>
}
