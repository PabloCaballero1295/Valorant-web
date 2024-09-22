import { Footer } from "../Footer/Footer"
import { NavBar } from "../NavBar/NavBar"

interface MainLayoutProps {
  children: JSX.Element
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
