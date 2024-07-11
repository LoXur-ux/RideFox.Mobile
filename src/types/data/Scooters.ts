import ScooterStatus from "../enum/ScooterStatuses";
import IScooterModel from "../model/IScooterModel";

const scootersData: IScooterModel[] = [
  {
    id: "a1b2c3d4-e5f6-7890-ab1c-def234567890",
    name: "1023",
    charge: 89,
    status: ScooterStatus.Available,
    lat: 58.604203,
    lon: 49.666436,
  },
  {
    id: "b2c3d4e5-f6a7-8901-bc2d-ef3456789012",
    name: "3045",
    charge: 41,
    status: ScooterStatus.Available,
    lat: 58.604214,
    lon: 49.66637,
  },
  {
    id: "c3d4e5f6-a7b8-9012-cd3e-234567890123",
    name: "5078",
    charge: 93,
    status: ScooterStatus.Available,
    lat: 58.60422,
    lon: 49.666508,
  },
  {
    id: "d4e5f6a7-b8c9-0123-de4f-345678901234",
    name: "6712",
    charge: 67,
    status: ScooterStatus.Available,
    lat: 58.604211,
    lon: 49.666454,
  },
  {
    id: "e5f6a7b8-c901-2345-ef56-456789012345",
    name: "8120",
    charge: 10,
    status: ScooterStatus.Available,
    lat: 58.604224,
    lon: 49.66655,
  },
  {
    id: "f6a7b8c9-0123-4567-f678-567890123456",
    name: "2453",
    charge: 81,
    status: ScooterStatus.Available,
    lat: 58.60422,
    lon: 49.66647,
  },
];

export default scootersData;
