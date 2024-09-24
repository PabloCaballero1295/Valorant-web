import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Agent } from "../../types/agent"
import styles from "./AgentPage.module.css"
import { AbilityCard } from "../AbilityCard/AbilityCard"
import { ScrollRestoration } from "react-router-dom"
import { Loading } from "../Loading/Loading"

export const AgentPage = () => {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Agent>()

  const navigate = useNavigate()

  useEffect(() => {
    const abortController = new AbortController()
    setIsLoading(true)
    fetch(`https://valorant-api.com/v1/agents/${params.id}?language=es-ES`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((agents) => {
        const agentdata: Agent = agents.data
        setData(agentdata)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        navigate("/error")
      })
      .finally(() => setIsLoading(false))

    return () => abortController.abort()
  }, [params.id, navigate])

  return (
    <>
      {!isLoading && data ? (
        <>
          <div className={styles.top_content}>
            <div className="container">
              <div className={styles.agent_top_content}>
                <div className={styles.left_content}>
                  <div className={styles.agent_name}>{data.displayName}</div>
                  <div className={styles.agent_desc}>{data.description}</div>
                  <div className={styles.role_container}>
                    <div className={styles.role_content}>
                      <div className={styles.role_left_container}>
                        <div className={styles.role_left_content}>
                          <img
                            className={styles.role_image}
                            src={data.role.displayIcon}
                          />
                          <div className={styles.role_title}>ROL</div>
                          <div className={styles.role_name}>
                            {data.role.displayName}
                          </div>
                        </div>
                      </div>
                      <div className={styles.role_description}>
                        {data.role.description}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.right_content}>
                  <img
                    className={styles.agent_background}
                    src={data.background}
                  />
                  <img className={styles.agent_image} src={data.fullPortrait} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container container_background">
              <div className={styles.abilities_container}>
                <div className={styles.abilities_title}>SPECIAL ABILITIES</div>
                <div className={styles.abilities_content}>
                  {data.abilities.map((ability) => (
                    <AbilityCard
                      key={ability.slot}
                      image={ability.displayIcon}
                      name={ability.displayName}
                      description={ability.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
      <ScrollRestoration />
    </>
  )
}
