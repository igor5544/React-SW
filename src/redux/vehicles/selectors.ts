import { Vehicle } from '../../api/models/vehicle';
import { RootState } from '../redux-store';

/** Selector for all vehicles */
export const getFullVehiclesList = (state: RootState): Vehicle[] => (
  state.vehicles.allVehicles
)

/** Selector for active vehicles list */
export const getActiveVehiclesList = (state: RootState): Vehicle[] => (
  state.vehicles.activeVehiclesList
)
