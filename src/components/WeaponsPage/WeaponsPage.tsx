import { useEffect, useState } from "react"
import { Weapon } from "../../types/weapons"
import styles from "./WeaponsPage.module.css"
import { Loading } from "../Loading/Loading"
import { ScrollRestoration, useNavigate } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

export const WeapongsPage = () => {
  const [groupedItems, setGroupedItems] = useState<Record<string, Weapon[]>>({})

  const fixCategoryName = (text: string) => {
    return text.replace("EEquippableCategory::", "")
  }

  const navigate = useNavigate()

  const { data, loading, error } = useFetch<Weapon[]>(
    `https://valorant-api.com/v1/weapons?language=es-ES`
  )

  useEffect(() => {
    if (!data) {
      return
    }

    const weapon_list: Weapon[] = data
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
  }, [data])

  useEffect(() => {
    if (error) {
      navigate("/error")
    }
  }, [error, navigate])

  return (
    <div>
      {!loading && data ? (
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
