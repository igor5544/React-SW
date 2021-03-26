import { EntityContainerDto } from '../dtos/container-dto';
import { CharactersDto } from '../dtos/characters-dto';
import { Characters } from '../models/characters';

/** Mapper for characters */
export const CharactersMapper = {
  /** Get correct characters format */
  getCharacters(charactersData: EntityContainerDto<CharactersDto>, id: string): Characters {
    return new Characters({
      name: charactersData.fields.name,
      birth: charactersData.fields.birth_year,
      eyes: charactersData.fields.eye_color,
      gender: charactersData.fields.gender,
      hair: charactersData.fields.hair_color,
      height: charactersData.fields.height,
      home: charactersData.fields.homeworld,
      mass: charactersData.fields.mass,
      skin: charactersData.fields.skin_color,
      pk: charactersData.pk,
      id,
    });
  },
  /** Get correct category title */
  getCorrectCategory(category: string): string {
    switch (category) {
      case 'birth':
        return 'birth_year';
      case 'eyes':
        return 'eye_color';
      case 'hair':
        return 'hair_color';
      case 'home':
        return 'homeworld';
      case 'skin':
        return 'skin_color';
      default:
        return category;
    }
  },
}
