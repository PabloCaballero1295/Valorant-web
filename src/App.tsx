import "./App.css"
import { MainLayout } from "./components/MainLayout/MainLayout"
import { MainPage } from "./components/MainPage/MainPage"

function App() {
  return (
    <>
      <MainLayout>
        <MainPage />
      </MainLayout>
    </>
  )
}

export default App
