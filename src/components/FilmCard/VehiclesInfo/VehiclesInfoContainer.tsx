import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { getActiveVehiclesList, clearVehiclesData } from '../../../redux/vehicles/dispatchers';
import { VehiclesInfo } from './VehiclesInfo';
import { getVehiclesKeys } from '../../../redux/films/selectors';
import { Vehicle } from '../../../api/models/vehicle';
import { getAllbyKeysSubToggle } from '../../../utils/getAllByKeys';
import { RootState } from '../../../redux/redux-store';
import { getActiveVehiclesList as getActiveVehiclesListSelect } from '../../../redux/vehicles/selectors';

/** Props interface */
interface Props {
  /** Vehicles keys */
  vehiclesKeys?: string[];
  /** Clear active vehicles data */
  clearVehiclesData: () => void;
  /** Vehicles */
  vehicles: Vehicle[];
}

/** Get vehicle list */
const VehiclesAPIComponent: React.FC<Props> = ({ vehiclesKeys, clearVehiclesData, vehicles }) => {
  const dispatch = useDispatch();

  useEffect((): any => {
    clearVehiclesData();

    let unsubscribes = () => { };

    if (vehiclesKeys) {
      unsubscribes = getAllbyKeysSubToggle(vehiclesKeys, getActiveVehiclesList, dispatch);
    }

    return unsubscribes;
  }, [vehiclesKeys]);

  return <VehiclesInfo vehicles={vehicles} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  vehiclesKeys: getVehiclesKeys(state),
  vehicles: getActiveVehiclesListSelect(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  clearVehiclesData,
}

/** Set props and thunks form store */
export const VehiclesInfoCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(VehiclesAPIComponent);
