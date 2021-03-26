import { db } from './firebase';

const mainRequest = db.collection('vehicles');

/** Api for vehicles */
export const vehicleAPI = {
  /** Get all vehilces request */
  getFullVehicles() {
    return mainRequest;
  },
  /** Get vehicles by PK request */
  getVehiclesByPersKeys(persKeys: string[]) {
    return mainRequest.where('pk', 'in', persKeys);
  }
}
