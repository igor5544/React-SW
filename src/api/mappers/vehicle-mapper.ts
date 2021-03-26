import { EntityContainerDto } from '../dtos/container-dto';
import { VehicleDto } from '../dtos/vehicle-dto';
import { Vehicle } from '../models/vehicle';

/** Mapper for vehicle */
export const VehicleMapper = {
  /** Get correct vehicle format */
  getVehicle(starshipData: EntityContainerDto<VehicleDto>, id: string): Vehicle {
    return new Vehicle({
      class: starshipData.fields.vehicle_class,
      pk: starshipData.pk,
      id,
    });
  }
}
