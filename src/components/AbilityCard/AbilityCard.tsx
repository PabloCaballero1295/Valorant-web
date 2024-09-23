import styles from "./AbilityCard.module.css"

interface AbilityCardProps {
  image: string
  name: string
  description: string
}

export const AbilityCard = ({ image, name, description }: AbilityCardProps) => {
  return (
    <div className={styles.ability}>
      <img className={styles.ability_img} src={image} />
      <div className={styles.ability_data}>
        <div className={styles.ability_name}>{name}</div>
        <div className={styles.ability_description}>{description}</div>
      </div>
    </div>
  )
}
