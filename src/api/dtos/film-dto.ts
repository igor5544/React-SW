/** Film dto interface */
export interface FilmDto {
  /** Title */
  title: string;
  /** Director */
  director: string;
  /** Opening text */
  opening_crawl: string;
  /** Producer */
  producer: string;
  /** Release data */
  release_date: Date;
  /** List with characters pk */
  characters: Array<string>;
  /** List with planets pk */
  planets: Array<string>;
  /** List with species pk */
  species: Array<string>;
  /** List with starships pk */
  starships: Array<string>;
  /** List with species pk */
  vehicles: Array<string>;
}
