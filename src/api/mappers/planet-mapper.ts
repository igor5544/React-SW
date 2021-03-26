import { EntityContainerDto } from '../dtos/container-dto';
import { PlanetDto } from '../dtos/planet-dto';
import { Planet } from '../models/planet';

/** Mapper for planet */
export const PlanetMapper = {
  /** Get correct planet format */
  getPlanet(planetData: EntityContainerDto<PlanetDto>, id: string): Planet {
    return new Planet({
      name: planetData.fields.name,
      climate: planetData.fields.climate,
      diameter: planetData.fields.diameter,
      gravity: planetData.fields.gravity,
      orbitalPeriod: planetData.fields.orbital_period,
      population: planetData.fields.population,
      rotationPeriod: planetData.fields.rotation_period,
      water: planetData.fields.surface_water,
      terrain: planetData.fields.terrain,
      pk: planetData.pk,
      id,
    });
  },
  /** Get correct category title */
  getCorrectCategory(category: string): string {
    switch (category) {
      case 'orbitalPeriod':
        return 'orbital_period';
      case 'rotationPeriod':
        return 'rotation_period';
      case 'water':
        return 'surface_water';
      default:
        return category;
    }
  },
}
