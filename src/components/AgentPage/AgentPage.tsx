import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Agent } from "../../types/agent"

export const AgentPage = () => {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Agent>()

  useEffect(() => {
    fetch(`https://valorant-api.com/v1/agents/${params.id}?language=es-ES`)
      .then((response) => response.json())
      .then((agents) => {
        const agentdata: Agent = agents.data
        setData(agentdata)
        setIsLoading(false)
      })
  }, [params.id])

  return (
    <>
      {!isLoading && data ? (
        <div className="container">
          <div>{data?.displayName}</div>
          <div>{data.description}</div>
        </div>
      ) : null}
    </>
  )
}
