import React, { Dispatch, useState, SetStateAction, useContext } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { mainBlue } from '../../color';
import { DefaultText } from '../../CustomText';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { checkListCtx } from '../../Context/CheckListByServer';

interface IProps {
  setOnModal: Dispatch<SetStateAction<boolean>>;
  onModal: boolean;
}

function CameraAndGallery({ setOnModal, onModal }: IProps) {
  const checkListContext = useContext(checkListCtx);

  const [response, setResponse] = useState<any>(null);

  const onPostImageDataHandler = async (images: any) => {
    const imageData = new FormData();
    await images.map((image: any) => imageData.append('image', image.sourceURL));

    await axios
      .post(`/api/check-list/${checkListContext?.checkListId}/image`, imageData)
      .then((e) => {
        console.log('t');
        console.log(e);
      })
      .catch((e) => {
        console.log('c');
        console.log(e);
      });
  };

  const onGallery = () =>
    ImagePicker.openPicker({
      // forceJPG: true,
      // includeBase64: true,
      multiple: true,
    }).then((images) => {
      onPostImageDataHandler(images);
    });

  const onCamera = () =>
    ImagePicker.openCamera({
      cropping: true,
    }).then((image) => {
      console.log(image);
    });

  return (
    <Modal isVisible={true} onBackdropPress={() => setOnModal(!onModal)}>
      <Pressable style={styles.floatingBtnWrapper} onPress={onGallery}>
        <DefaultText>갤러릴</DefaultText>
      </Pressable>

      <Pressable onPress={onCamera}>
        <Image source={require('../../assets/images/checkList/camera.png')} />
      </Pressable>
      <Pressable onPress={() => {}}>
        <DefaultText>x</DefaultText>
      </Pressable>

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
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  floatingBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    backgroundColor: mainBlue,
    borderRadius: 50,
  },
});

export default CameraAndGallery;
