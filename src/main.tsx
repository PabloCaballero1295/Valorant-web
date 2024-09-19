import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./components/MainLayout/MainLayout"
import { MainPage } from "./components/MainPage/MainPage"
import "./index.css"
import { AgentsPage } from "./components/AgentsPage/AgentsPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <MainPage />
      </MainLayout>
    ),
    errorElement: (
      <MainLayout>
        <div>Error 404</div>
      </MainLayout>
    ),
  },
  {
    path: "/agents",
    element: (
      <MainLayout>
        <AgentsPage />
      </MainLayout>
    ),
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
