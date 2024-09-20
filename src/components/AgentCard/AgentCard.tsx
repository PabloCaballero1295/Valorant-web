import "./AgentCard.css"
import { Link } from "react-router-dom"

interface AgentProps {
  id: string
  name: string
  image: string
}

export const AgentCard = ({ id, name, image }: AgentProps) => {
  return (
    <Link to={`/agents/${id}`}>
      <div className="agent-card-container">
        <div className="agent-image-container">
          <img loading="lazy" className="agent-image" src={image} />
        </div>
        <div className="agent-name">{name}</div>
      </div>
    </Link>
  )
}
