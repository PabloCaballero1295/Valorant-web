import styles from "./AgentCard.module.css"
import { Link } from "react-router-dom"

interface AgentProps {
  id: string
  name: string
  image: string
}

export const AgentCard = ({ id, name, image }: AgentProps) => {
  return (
    <Link to={`/agents/${id}`}>
      <div className={styles.agent_card_container}>
        <div className={styles.agent_image_container}>
          <img loading="lazy" className={styles.agent_image} src={image} />
        </div>
        <div className={styles.agent_name}>{name}</div>
      </div>
    </Link>
  )
}
