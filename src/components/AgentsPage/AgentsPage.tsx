import { useEffect, useState } from "react"
import "./AgentsPage.css"
import { AgentCard } from "../AgentCard/AgentCard"

import { Agent } from "../../types/agent"

export const AgentsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Agent[]>([])

  useEffect(() => {
    fetch(
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-ES"
    )
      .then((response) => response.json())
      .then((agents) => {
        const agents_list: Agent[] = agents.data
        setData([...agents_list])
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="container">
      {data && !isLoading ? (
        <div className="agents-container">
          <div className="agents-title">AGENTES</div>
          <div className="agents-list">
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
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}
