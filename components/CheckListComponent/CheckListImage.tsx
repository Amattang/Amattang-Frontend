import React, { Dispatch, SetStateAction, useContext, useRef, useState } from 'react';
import { DefaultText } from '../../CustomText';
import Modal from 'react-native-modal';
import { Dimensions, Image, Pressable, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { answerButtonType } from '../../types/checkListTypes';
import styles from './styles';
import axios from 'axios';
import { checkListCtx } from '../../Context/CheckListByServer';

interface IProps {
  checkList: answerButtonType[];
  setModal?: Dispatch<SetStateAction<boolean>>;
  modal?: boolean;
  order: number;
}
const windowWidth = Dimensions.get('window').width;

function CheckListImage({ checkList, setModal, modal, order }: IProps) {
  const checkListContext = useContext(checkListCtx);
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const mainImageHandler = async (item: answerButtonType) => {
    try {
      const response = await axios.get(
        `/api/check-list/${checkListContext?.checkListId}/image/main/${item.id}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    {
      setModal ? setModal(false) : null;
    }
  };
  console.log(checkList);

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.selectedImageWrapper}>
        <Image style={styles.selectedImage} resizeMode="cover" source={{ uri: item.url }} />
        <DefaultText style={{ color: 'white', marginTop: 20 }}>
          {item.order + 1} / {checkList.length}
        </DefaultText>
        <Pressable style={styles.imageSelectButtonWrapper} onPress={() => mainImageHandler(item)}>
          <DefaultText style={styles.selectMainImageText}>대표 사진으로 설정</DefaultText>
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <Modal style={styles.imageModal} backdropOpacity={1} isVisible={modal}>
        <Pressable
          style={styles.selectedimageCancleButton}
          onPress={() => {
            setModal ? setModal(false) : null;
          }}
        >
          <Image source={require('../../assets/images/common/X.png')} />
        </Pressable>
        <Carousel
          firstItem={order}
          ref={isCarousel}
          data={checkList}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={renderItem}
        />
      </Modal>
    </>
  );
}

export default CheckListImage;
