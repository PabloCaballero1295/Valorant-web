import { useParams } from "react-router-dom"
import styles from "./MapPage.module.css"
import { useEffect, useState } from "react"
import { Map } from "../../types/map"
import { ScrollRestoration } from "react-router-dom"
import { getURLCoords } from "../../utils/utils"
import { Loading } from "../Loading/Loading"

export const MapPage = () => {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Map>()

  const [urlMap, setUrlMap] = useState("")

  useEffect(() => {
    fetch(`https://valorant-api.com/v1/maps/${params.id}?language=es-ES`)
      .then((response) => response.json())
      .then((map) => {
        const mapData: Map = map.data
        if (map.data.coordinates) {
          console.log(getURLCoords(map.data.coordinates))
          setUrlMap(getURLCoords(map.data.coordinates))
        }
        setData(mapData)
        setIsLoading(false)
      })
  }, [params.id])

  return (
    <>
      {!isLoading && data ? (
        <>
          <div
            className={styles.top_content}
            style={{ background: `url(${data.stylizedBackgroundImage})` }}
          >
            <div className="container">
              <div className={styles.top_flex}>
                <div className={styles.name_container}>
                  <div className={styles.name}>{data.displayName}</div>
                  <div className={styles.coordinates}>{data.coordinates}</div>
                  <div className={styles.tactical_description}>
                    {data.tacticalDescription}
                  </div>
                </div>
                <img src={data.splash} className={styles.main_image} />
              </div>
            </div>
          </div>
          <div className="container container_background">
            <div className={styles.map_images}>
              <div className={styles.map_top_view_container}>
                <div className={styles.map_image_title}>Vista cenital</div>
                <img src={data.displayIcon} className={styles.map_top_view} />
              </div>
              <div className={styles.map_ingame_view_container}>
                <div className={styles.map_image_title}>Concept Art</div>
                <img
                  src={data.listViewIconTall}
                  className={styles.map_ingame_view}
                />
              </div>
            </div>
            {urlMap ? (
              <div className={styles.button_container}>
                <a
                  className={styles.world_map_button}
                  href={urlMap}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abir ubicación en el mundo
                </a>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <Loading />
      )}

      <ScrollRestoration />
    </>
  )
}
