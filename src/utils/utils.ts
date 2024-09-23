const getValorantCoordLetter = (letter: string) => {
  switch (letter) {
    case "A":
    case "Z":
      return "0"
    case "B":
    case "Y":
      return "1"
    case "C":
    case "X":
      return "2"
    case "D":
    case "W":
      return "3"
    case "E":
    case "V":
      return "4"
    case "F":
    case "U":
      return "5"
    case "G":
    case "T":
      return "6"
    case "H":
    case "S":
      return "7"
    case "I":
    case "R":
      return "8"
    case "J":
    case "Q":
      return "9"

    default:
      return ""
  }
}

export const getURLCoords = (coords: string) => {
  let text = coords.split(",")

  if (text.length < 2) {
    text = coords.split(" ")
    if (text.length < 2) {
      return ""
    }
  }

  const lat_n1 = text[0].split("º")[0]
  const lat_n2 = text[0].split("°")[1].split("'")[0]
  let lat_n3 = text[0].split("'")[1]
  const lat_n3_aux = lat_n3.split('"')[0]

  lat_n3 =
    getValorantCoordLetter(lat_n3_aux[0]) +
    getValorantCoordLetter(lat_n3_aux[1])

  const latitude =
    parseInt(lat_n1) + parseFloat(lat_n2) / 60 + parseFloat(lat_n3) / 3600 //`${lat_n1}°${lat_n2}'${lat_n3}`

  const lon_n1 = text[1].split("°")[0]
  const lon_n2 = text[1].split("°")[1].split("'")[0]
  let lon_n3 = text[1].split("'")[1]
  const lon_n3_aux = lon_n3.split('"')[0]

  lon_n3 =
    getValorantCoordLetter(lon_n3_aux[0]) +
    getValorantCoordLetter(lon_n3_aux[1])

  const longitude =
    parseInt(lon_n1) + parseFloat(lon_n2) / 60 + parseFloat(lon_n3) / 3600 //`${lon_n1}°${lon_n2}'${lon_n3}`

  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
}
