import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Agent } from "../../types/agent"
import styles from "./AgentPage.module.css"

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
          <div className={styles.agent_top_content}>
            <div className={styles.left_content}>
              <div className={styles.agent_name}>{data.displayName}</div>
              <div className={styles.agent_desc}>{data.description}</div>
            </div>
            <div className={styles.right_content}>
              <img className={styles.agent_background} src={data.background} />
              <img className={styles.agent_image} src={data.fullPortrait} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
