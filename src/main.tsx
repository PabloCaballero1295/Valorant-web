import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./components/MainLayout/MainLayout"
import { MainPage } from "./components/MainPage/MainPage"
import "./index.css"
import { AgentsPage } from "./components/AgentsPage/AgentsPage"
import { AgentPage } from "./components/AgentPage/AgentPage"
import { MapsPage } from "./components/MapsPage/MapsPage"
import { MapPage } from "./components/MapPage/MapPage"
import { ErrorPage } from "./components/ErrorPage/ErrorPage"

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
        <ErrorPage />
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
  {
    path: "/maps",
    element: (
      <MainLayout>
        <MapsPage />
      </MainLayout>
    ),
  },
  {
    path: "/maps/:id",
    element: (
      <MainLayout>
        <MapPage />
      </MainLayout>
    ),
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
