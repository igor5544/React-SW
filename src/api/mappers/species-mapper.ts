import { EntityContainerDto } from '../dtos/container-dto';
import { SpeciesDto } from '../dtos/species-dto';
import { Species } from '../models/species';

/** Mapper for species */
export const SpeciesMapper = {
  /** Get correct species format */
  getSpecies(speciesData: EntityContainerDto<SpeciesDto>, id: string): Species {
    return new Species({
      name: speciesData.fields.name,
      height: speciesData.fields.average_height,
      life: speciesData.fields.average_lifespan,
      classification: speciesData.fields.classification,
      designation: speciesData.fields.designation,
      eye: speciesData.fields.eye_colors,
      hair: speciesData.fields.hair_colors,
      home: speciesData.fields.homeworld,
      language: speciesData.fields.language,
      skin: speciesData.fields.skin_colors,
      pk: speciesData.pk,
      id,
    });
  }
}
