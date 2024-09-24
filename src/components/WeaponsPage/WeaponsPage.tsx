import { useEffect, useState } from "react"
import { Weapon } from "../../types/weapons"
import styles from "./WeaponsPage.module.css"
import { Loading } from "../Loading/Loading"
import { ScrollRestoration } from "react-router-dom"

export const WeapongsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Weapon[]>([])
  const [groupedItems, setGroupedItems] = useState<Record<string, Weapon[]>>({})

  const fixCategoryName = (text: string) => {
    return text.replace("EEquippableCategory::", "")
  }

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons?language=es-ES")
      .then((response) => response.json())
      .then((weapons) => {
        const weapon_list: Weapon[] = weapons.data
        weapon_list.map((weapon) => {
          weapon.category = fixCategoryName(weapon.category)
        })

        const grouped = weapon_list.reduce(
          (grouped: Record<string, Weapon[]>, item) => {
            const { category } = item

            if (!grouped[category]) {
              grouped[category] = []
            }
            grouped[category].push(item)
            return grouped
          },
          {} as Record<string, Weapon[]>
        )

        setGroupedItems(grouped)

        setData([...weapon_list])
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      {!isLoading && data ? (
        <div className="container container_background">
          {Object.entries(groupedItems).map(([category, itemsInCategory]) => (
            <div key={category} className={styles.weapons_page_container}>
              <div className={styles.category_title}>{category}</div>
              <div className={styles.weapons_category_container}>
                {itemsInCategory.map((weapon) => (
                  <div key={weapon.uuid} className={styles.weapon_card}>
                    <img
                      src={weapon.displayIcon}
                      className={styles.weapon_image}
                    />
                    <div className={styles.weapon_name}>
                      {weapon.displayName}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
      <ScrollRestoration />
    </div>
  )
}
