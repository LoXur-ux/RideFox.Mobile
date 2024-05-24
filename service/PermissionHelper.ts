// import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";

// // Функция для проверки разрешения на использование GPS
// export async function checkLocationPermission(): Promise<boolean> {
//   try {
//     const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     return result === RESULTS.GRANTED;
//   } catch (error) {
//     console.warn("Error checking location permission:", error);
//     return false;
//   }
// }

// // Функция для запроса разрешения на использование GPS
// export async function requestLocationPermission(): Promise<boolean> {
//   try {
//     const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
//     return result === RESULTS.GRANTED;
//   } catch (error) {
//     console.warn("Error requesting location permission:", error);
//     return false;
//   }
// }

// // Функция для проверки разрешения на использование камеры
// export async function checkCameraPermission(): Promise<boolean> {
//   try {
//     const result = await check(PERMISSIONS.ANDROID.CAMERA);
//     return result === RESULTS.GRANTED;
//   } catch (error) {
//     console.warn("Error checking camera permission:", error);
//     return false;
//   }
// }

// // Функция для запроса разрешения на использование камеры
// export async function requestCameraPermission(): Promise<boolean> {
//   try {
//     const result = await request(PERMISSIONS.ANDROID.CAMERA);
//     return result === RESULTS.GRANTED;
//   } catch (error) {
//     console.warn("Error requesting camera permission:", error);
//     return false;
//   }
// }
