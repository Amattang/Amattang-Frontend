import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Platform, Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import { DefaultText } from '../../CustomText';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { checkListCtx } from '../../Context/CheckListByServer';
import styles from './cameraAndGallery.styles';

interface IProps {
  setOnModal: Dispatch<SetStateAction<boolean>>;
  onModal: boolean;
}

function CameraAndGallery({ setOnModal, onModal }: IProps) {
  const checkListContext = useContext(checkListCtx);

  const onPostImageDataHandler = async (images: any) => {
    const imageData = new FormData();
    images.map((image: any) =>
      imageData.append('image', {
        uri: Platform.OS === 'android' ? image.path : image.path.replace('file://', ''),
        type: image.mime,
        name: image.filename,
      })
    );

    await axios
      .post(`/api/check-list/${checkListContext?.checkListId}/image`, imageData)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onGallery = () =>
    ImagePicker.openPicker({
      multiple: true,
    }).then((images: any) => {
      onPostImageDataHandler(images);
      setOnModal(!onModal);
    });

  const onCamera = () =>
    ImagePicker.openCamera({
      cropping: true,
    }).then((images: any) => {
      onPostImageDataHandler(images);
      setOnModal(!onModal);
    });

  return (
    <Modal isVisible={true} onBackdropPress={() => setOnModal(!onModal)}>
      <Pressable style={styles.modalWrapper} onPress={() => setOnModal(!onModal)}>
        <View style={styles.cameraModalElementBtnWrapper}>
          <Pressable style={styles.cameraModalEachBtn} onPress={onCamera}>
            <DefaultText style={styles.cameraModalInnerText}>카메라</DefaultText>
          </Pressable>

          <View style={styles.horizantalLine} />

          <Pressable style={styles.cameraModalEachBtn} onPress={onGallery}>
            <DefaultText style={styles.cameraModalInnerText}>앨범</DefaultText>
          </Pressable>
        </View>

        <Pressable style={styles.cameraModalXBtn} onPress={() => setOnModal(!onModal)}>
          <DefaultText style={[styles.cameraModalInnerText, styles.cameraModalBoldText]}>
            취소
          </DefaultText>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

export default CameraAndGallery;
