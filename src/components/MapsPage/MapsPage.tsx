import styles from "./MapsPage.module.css"
import { Map } from "../../types/map"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ScrollRestoration } from "react-router-dom"
import { Loading } from "../Loading/Loading"

const blockeMaps = [
  "5914d1e0-40c4-cfdd-6b88-eba06347686c",
  "1f10dab3-4294-3827-fa35-c2aa00213cf3",
  "ee613ee9-28b7-4beb-9666-08db13bb2244",
]

export const MapsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Map[]>([])

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps?language=es-ES")
      .then((response) => response.json())
      .then((maps) => {
        const map_list: Map[] = maps.data

        setData([...map_list])
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {!isLoading && data ? (
        <div className="container container_background">
          <div className={styles.maps_page_content}>
            <div className={styles.maps_title}>Mapas</div>

            <div className={styles.maps_container}>
              {data.map((map) =>
                blockeMaps.includes(map.uuid) ? null : (
                  <Link key={map.uuid} to={`/maps/${map.uuid}`}>
                    <div className={styles.map_card}>
                      <img
                        className={styles.map_image}
                        loading="lazy"
                        src={map.listViewIcon}
                      />
                      <div className={styles.map_name}>{map.displayName}</div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
          <ScrollRestoration />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
