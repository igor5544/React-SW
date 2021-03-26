import { ConstructorInitArg } from '../../utils/constructor-Init-arg';

/** Film class */
export class Film {
  /** Title */
  public title: string;
  /** Director */
  public director: string;
  /** Opening text */
  public opening: string;
  /** Producer */
  public producer: string;
  /** Release data */
  public release: Date;
  /** List with characters pk */
  public characters: Array<string>;
  /** List with planets pk */
  public planets: Array<string>;
  /** List with species pk */
  public species: Array<string>;
  /** List with starships pk */
  public starships: Array<string>;
  /** List with species pk */
  public vehicles: Array<string>;
  /** Id */
  public id: string;

  constructor(data: ConstructorInitArg<Film>) {
    this.title = data.title;
    this.director = data.director;
    this.opening = data.opening;
    this.producer = data.producer;
    this.release = data.release;
    this.characters = data.characters;
    this.planets = data.planets;
    this.species = data.species;
    this.starships = data.starships;
    this.vehicles = data.vehicles;
    this.id = data.id;
  }
}
