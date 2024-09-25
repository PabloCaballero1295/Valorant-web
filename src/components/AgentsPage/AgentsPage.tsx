import { useEffect } from "react"
import styles from "./AgentsPage.module.css"
import { AgentCard } from "../AgentCard/AgentCard"
import { ScrollRestoration, useNavigate } from "react-router-dom"
import { Agent } from "../../types/agent"
import { Loading } from "../Loading/Loading"
import { useFetch } from "../../hooks/useFetch"

export const AgentsPage = () => {
  const navigate = useNavigate()
  const { data, loading, error } = useFetch<Agent[]>(
    `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-ES`
  )

  useEffect(() => {
    if (error) {
      navigate("/error")
    }
  }, [error, navigate])

  return (
    <>
      {data && !loading ? (
        <div className="container container_background">
          <div className={styles.agents_container}>
            <div className={styles.agents_title}>AGENTES</div>
            <div className={styles.agents_list}>
              {data.map((agent) => {
                return (
                  <AgentCard
                    key={agent.uuid}
                    id={agent.uuid}
                    name={agent.displayName}
                    image={agent.displayIcon}
                  />
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <ScrollRestoration />
    </>
  )
}
