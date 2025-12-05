import { SAV } from 'src/types/SAVTypes/SAV.ts'

export type BoxCollectionIndex = {
  box: number
  box_slot: number
}
export type OpenHomeMonLocation =
  | { is_home: false; bank?: undefined; save: SAV }
  | { is_home: true; bank: number; save?: undefined }

/**
 * A mon's location can either be in a save file's box, or in the current open bank box location.
 */
export type MonLocation = BoxCollectionIndex & OpenHomeMonLocation

export type OpenHomeUIMonLocation = MonLocation
