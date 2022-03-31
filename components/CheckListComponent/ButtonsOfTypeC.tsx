import React, { Dispatch, SetStateAction, useState } from 'react';
import { DefaultText } from '../../CustomText';
import { checkListTypes } from '../../types/checkListTypes';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import CheckListImage from './CheckListImage';

interface IProps {
  setModal?: Dispatch<SetStateAction<boolean>>;
  modal?: boolean;
  checkList: checkListTypes;
}

function ButtonsOfTypeC({ setModal, modal, checkList }: IProps) {
  const [order, setOrder] = useState<number | undefined>(0);
  return (
    <>
      <View style={styles.imageWrapper}>
        {checkList?.answer?.map((item) => (
          <>
            <Pressable
              key={item.id}
              onPress={() => {
                setModal ? setModal(true) : null;
                setOrder(item.order);
              }}
            >
              <Image
                style={styles.eachImageElement}
                source={{ uri: item.url }}
                resizeMode="cover"
              />
              {item.main ? (
                <View style={styles.mainImageWrapper}>
                  <DefaultText style={styles.mainImageText}>대표 사진</DefaultText>
                </View>
              ) : null}
            </Pressable>
          </>
        ))}
      </View>
      {checkList?.answer?.some((item) => item.id) ? (
        <CheckListImage
          order={order}
          checkList={checkList.answer}
          setModal={setModal}
          modal={modal}
        />
      ) : null}
    </>
  );
}
export default ButtonsOfTypeC;
