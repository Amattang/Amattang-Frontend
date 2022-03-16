import React, { Dispatch, useState, SetStateAction } from 'react';
import { Button, Image, Pressable, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { DemoButton, DemoResponse } from './CameraButtons';

import * as ImagePicker from 'react-native-image-picker';
import { cameraTypes } from '../../types/cameraTypes';
import { mainBlue } from '../../color';

/* toggle includeExtra */
const includeExtra = true;

interface IProps {
  setOnModal: Dispatch<SetStateAction<boolean>>;
  onModal: boolean;
}

function CameraAndGallery({ setOnModal, onModal }: IProps) {
  const [response, setResponse] = useState<any>(null);

  const onButtonPress = React.useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  return (
    <Modal isVisible={true} onBackdropPress={() => setOnModal(!onModal)}>
      <View style={styles.buttonContainer}>
        {actions.map(({ title, type, options }) => {
          return (
            <DemoButton key={title} onPress={() => onButtonPress(type, options)}>
              {title}
            </DemoButton>
          );
        })}
      </View>

      {response?.assets &&
        response?.assets.map(({ uri }: any) => (
          <View key={uri} style={styles.image}>
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={{ width: 200, height: 200 }}
              source={{ uri: uri }}
            />
          </View>
        ))}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 300,
    backgroundColor: mainBlue,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },

  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];

export default CameraAndGallery;
