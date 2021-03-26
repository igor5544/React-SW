/** Planet dto interface */
export interface PlanetDto {
  /** Name */
  name: string;
  /** Climate */
  climate: string;
  /** Diametr in km */
  diameter: number;
  /** Gravity format: "portion" standart */
  gravity: string;
  /** Orbital period in days */
  orbital_period: number;
  /** Population count */
  population: number;
  /** Rotation period in hours */
  rotation_period: number;
  /** Water in percent */
  surface_water: number;
  /** Terrain */
  terrain: string;
}
