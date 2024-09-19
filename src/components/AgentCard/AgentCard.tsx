import "./AgentCard.css"

interface AgentProps {
  name: string
  image: string
}

export const AgentCard = ({ name, image }: AgentProps) => {
  return (
    <div className="agent-card-container">
      <div className="agent-image-container">
        <img className="agent-image" src={image} />
      </div>
      <div className="agent-name">{name}</div>
    </div>
  )
}
