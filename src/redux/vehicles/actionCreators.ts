import { Vehicle } from '../../api/models/vehicle';
import {
  CLEAR_ACTIVE_VEHICLES,
  SET_ACTIVE_VEHICLES_LIST,
  SET_FULL_VEHICLES
} from './reducer';

/** Set vehicles */
export const setVehicles = (allVehicles: Vehicle[]) => ({
  type: SET_FULL_VEHICLES,
  allVehicles
});

/** Set active vehicles */
export const setActiveVehiclesList = (activeVehiclesList: Vehicle[]) => ({
  type: SET_ACTIVE_VEHICLES_LIST,
  activeVehiclesList
});

/** Clear  active vehicles */
export const clearActiveVehicles = () => ({
  type: CLEAR_ACTIVE_VEHICLES,
});

