import { ConstructorInitArg } from '../../utils/constructor-Init-arg';

/** Planet class */
export class Planet {
  /** Name */
  public name: string;
  /** Climate */
  public climate: string;
  /** Diametr in km */
  public diameter: number;
  /** Gravity format: "portion" standart */
  public gravity: string;
  /** Orbital period in days */
  public orbitalPeriod: number;
  /** Population count */
  public population: number;
  /** Rotation period in hours */
  public rotationPeriod: number;
  /** Water in percent */
  public water: number;
  /** Terrain */
  public terrain: string;
  /** Personal key */
  public pk: number;
  /** Id */
  public id: string;

  constructor(data: ConstructorInitArg<Planet>) {
    this.name = data.name;
    this.climate = data.climate;
    this.diameter = data.diameter;
    this.gravity = data.gravity;
    this.orbitalPeriod = data.orbitalPeriod;
    this.population = data.population;
    this.rotationPeriod = data.rotationPeriod;
    this.water = data.water;
    this.terrain = data.terrain;
    this.pk = data.pk;
    this.id = data.id;
  }
}
