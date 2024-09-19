import { useEffect, useState } from "react"
import "./AgentsPage.css"
import { AgentCard } from "../AgentCard/AgentCard"

export interface Agent {
  uuid: string
  displayName: string
  description: string
  developerName: string
  characterTags: string[]
  displayIcon: string
  displayIconSmall: string
  bustPortrait: string
  fullPortrait: string
  fullPortraitV2: string
  killfeedPortrait: string
  background: string
  backgroundGradientColors: string[]
  assetPath: string
  isFullPortraitRightFacing: boolean
  isPlayableCharacter: boolean
  isAvailableForTest: boolean
  isBaseContent: boolean
  role: Role
  //recruitmentData: any
  abilities: Ability[]
  //voiceLine: any
}

export interface Role {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
  assetPath: string
}

export interface Ability {
  slot: string
  displayName: string
  description: string
  displayIcon: string
}

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
          <div className="agents-title">Agents</div>
          <div className="agents-list">
            {data.map((agent) => {
              return (
                <AgentCard
                  key={agent.uuid}
                  name={agent.displayName}
                  image={agent.fullPortrait}
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
