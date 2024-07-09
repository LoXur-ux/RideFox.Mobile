import ScooterStatus from "../enum/ScooterStatuses";
import IScooterModel from "../model/IScooterModel";

const scootersData: IScooterModel[] = [
  {
    id: "a1b2c3d4-e5f6-7890-ab1c-def234567890",
    name: "1023",
    charge: 89,
    status: ScooterStatus.Available,
  },
  {
    id: "b2c3d4e5-f6a7-8901-bc2d-ef3456789012",
    name: "3045",
    charge: 41,
    status: ScooterStatus.Available,
  },
  {
    id: "c3d4e5f6-a7b8-9012-cd3e-234567890123",
    name: "5078",
    charge: 93,
    status: ScooterStatus.Available,
  },
  {
    id: "d4e5f6a7-b8c9-0123-de4f-345678901234",
    name: "6712",
    charge: 67,
    status: ScooterStatus.Available,
  },
  {
    id: "e5f6a7b8-c901-2345-ef56-456789012345",
    name: "8120",
    charge: 10,
    status: ScooterStatus.Available,
  },
  {
    id: "f6a7b8c9-0123-4567-f678-567890123456",
    name: "2453",
    charge: 81,
    status: ScooterStatus.Available,
  },
  {
    id: "a7b8c901-2345-6789-a789-678901234567",
    name: "3674",
    charge: 31,
    status: ScooterStatus.Available,
  },
  {
    id: "b8c90123-4567-8901-b890-789012345678",
    name: "4987",
    charge: 55,
    status: ScooterStatus.Available,
  },
  {
    id: "c9012345-6789-0123-c901-890123456789",
    name: "5521",
    charge: 76,
    status: ScooterStatus.Available,
  },
  {
    id: "d0123456-7890-1234-d012-901234567890",
    name: "6743",
    charge: 22,
    status: ScooterStatus.Available,
  },
  {
    id: "e1234567-8901-2345-e123-012345678901",
    name: "7894",
    charge: 99,
    status: ScooterStatus.Available,
  },
];

export default scootersData;
