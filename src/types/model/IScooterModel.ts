import ScooterStatus from "../enum/ScooterStatuses";

interface IScooterModel {
  id: string;
  name: string;
  charge: number;
  status: ScooterStatus;
  lat: number;
  lon: number;
}

export default IScooterModel;
