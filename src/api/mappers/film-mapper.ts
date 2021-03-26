import { EntityContainerDtoWithoutPk } from '../dtos/container-dto';
import { FilmDto } from '../dtos/film-dto';
import { Film } from '../models/film';

/** Mapper for film */
export const FilmMapper = {
  /** Get correct film format */
  getFilm(filmData: EntityContainerDtoWithoutPk<FilmDto>, id: string): Film {
    return new Film({
      title: filmData.fields.title,
      director: filmData.fields.director,
      opening: filmData.fields.opening_crawl,
      producer: filmData.fields.producer,
      release: new Date(filmData.fields.release_date),
      characters: filmData.fields.characters,
      planets: filmData.fields.planets,
      species: filmData.fields.species,
      starships: filmData.fields.starships,
      vehicles: filmData.fields.vehicles,
      id,
    });
  },
  /** Convert Film model to Film Dto */
  getFilmDto(filmData: Film): EntityContainerDtoWithoutPk<FilmDto> {
    return {
      fields: {
        title: filmData.title,
        director: filmData.director,
        opening_crawl: filmData.opening,
        producer: filmData.producer,
        release_date: filmData.release,
        characters: filmData.characters,
        planets: filmData.planets,
        species: filmData.species,
        starships: filmData.starships,
        vehicles: filmData.vehicles,
      },
    };
  },
  /** Get correct category title */
  getCorrectCategory(category: string): string {
    switch (category) {
      case 'opening':
        return 'opening_crawl';
      case 'release':
        return 'release_date';
      default:
        return category;
    }
  },
}
