import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./components/MainLayout/MainLayout"
import { MainPage } from "./components/MainPage/MainPage"
import "./index.css"
import { AgentsPage } from "./components/AgentsPage/AgentsPage"
import { AgentPage } from "./components/AgentPage/AgentPage"

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
  {
    path: "/agents/:id",
    element: (
      <MainLayout>
        <AgentPage />
      </MainLayout>
    ),
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
