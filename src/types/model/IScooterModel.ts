import ScooterStatus from "../enum/ScooterStatuses";

interface IScooterModel {
  id: string;
  name: string;
  charge: number;
  status: ScooterStatus;
}

export default IScooterModel;
