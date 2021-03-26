import { EntityContainerDto } from '../dtos/container-dto';
import { StarshipDto } from '../dtos/starship-dto';
import { Starship } from '../models/starship';

/** Mapper for starship */
export const StarshipMapper = {
  /** Get correct starship format */
  getStarship(starshipData: EntityContainerDto<StarshipDto>, id: string): Starship {
    return new Starship({
      mglt: starshipData.fields.MGLT,
      hyperdrive: starshipData.fields.hyperdrive_rating,
      class: starshipData.fields.starship_class,
      pk: starshipData.pk,
      id,
    });
  }
}
