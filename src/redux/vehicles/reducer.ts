import { Vehicle } from '../../api/models/vehicle';
import { createNewItemsList } from '../../utils/itemsListUtils';

export const SET_FULL_VEHICLES = 'SET_FULL_VEHICLES/VEHICLES';
export const SET_ACTIVE_VEHICLES_LIST = 'SET_ACTIVE_VEHICLES_LIST/VEHICLES';
export const CLEAR_ACTIVE_VEHICLES = 'CLEAR_ACTIVE_VEHICLES/VEHICLES';

/** State interfase */
export interface VehiclesState {
  /** Vehicles */
  allVehicles: Vehicle[];
  /** Active Vehicles */
  activeVehiclesList: Vehicle[];
}

/** Initial state */
const initialState: VehiclesState = {
  allVehicles: [],
  activeVehiclesList: [],
}

/** Reducer for vehicles data */
export const vehiclesReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case SET_FULL_VEHICLES:
      return ({
        ...state,
        allVehicles: action.allVehicles
      })
    case SET_ACTIVE_VEHICLES_LIST:
      return ({
        ...state,
        activeVehiclesList: createNewItemsList(
          state.activeVehiclesList,
          action.activeVehiclesList
        ),
      })
    case CLEAR_ACTIVE_VEHICLES:
      return ({
        ...state,
        activeVehiclesList: [],
      })
    default:
      return state;
  }
}
