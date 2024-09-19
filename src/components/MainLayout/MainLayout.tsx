import { NavBar } from "../NavBar/NavBar"

interface MainLayoutProps {
  children: JSX.Element
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
