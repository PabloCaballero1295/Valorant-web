export interface Map {
  uuid: string
  displayName: string
  tacticalDescription: string
  coordinates: string
  displayIcon: string
  listViewIcon: string
  listViewIconTall: string
  splash: string
  stylizedBackgroundImage: string
  premierBackgroundImage: string
  xMultiplier: number
  yMultiplier: number
  xScalarToAdd: number
  yScalarToAdd: number
  callouts: Callout[]
}

export interface Callout {
  regionName: string
  superRegionName: string
  location: Location
}

export interface Location {
  x: number
  y: number
}
