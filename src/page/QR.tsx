import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, PermissionsAndroid, Platform, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRScannerScreen = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs camera permission to scan QR codes',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setCameraPermission(true);
        } else {
          setCameraPermission(false);
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      setCameraPermission(true);
    }
  };

  const handleFlashMode = () => {
    setFlashMode(prevMode =>
      prevMode === RNCamera.Constants.FlashMode.off
        ? RNCamera.Constants.FlashMode.torch
        : RNCamera.Constants.FlashMode.off
    );
  };

  const renderCamera = () => {
    if (!cameraPermission) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={flashMode}
          captureAudio={false}
        >
          <View style={styles.overlay}>
            <Text style={styles.scanMessage}>Scan QR Code</Text>
            <TouchableOpacity onPress={handleFlashMode}>
              <Text style={styles.flashButton}>
                {flashMode === RNCamera.Constants.FlashMode.off ? 'Flash On' : 'Flash Off'}
              </Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
      );
    }
  };

  return <View style={styles.container}>{renderCamera()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  scanMessage: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  flashButton: {
    fontSize: 18,
    color: 'white',
  },
});

export default QRScannerScreen;
