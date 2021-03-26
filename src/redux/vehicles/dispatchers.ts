import { Dispatch } from 'redux';
import { vehicleAPI } from '../../api/firebase/vehicleAPI';
import { VehicleMapper } from '../../api/mappers/vehicle-mapper';
import { getByKeysCreator } from '../../utils/getByKeysCreator';
import { getFullDataCreator } from '../../utils/getFullDataCreator';
import { clearActiveVehicles, setActiveVehiclesList, setVehicles } from './actionCreators';

/** Thunc for get all vehicle */
export const getFullVehicle = getFullDataCreator(
  vehicleAPI.getFullVehicles,
  VehicleMapper.getVehicle,
  setVehicles
);

/** Get vehicle by PK */
export const getActiveVehiclesList = getByKeysCreator(
  vehicleAPI.getVehiclesByPersKeys,
  VehicleMapper.getVehicle,
  setActiveVehiclesList,
);

/** Thunk for clear vehicles */
export const clearVehiclesData = () => (dispatch: Dispatch<any>): void => {
  dispatch(clearActiveVehicles());
}
