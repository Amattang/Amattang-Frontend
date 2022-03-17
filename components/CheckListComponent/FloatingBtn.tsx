import React from 'react';
import { Image, Pressable } from 'react-native';
import styles from '../../screens/Landing/styles';

interface IProps {
  floatingFunction: () => void;
  image: 'rightArrow' | 'edit' | 'camera';
}

function FloatingBtn({ floatingFunction, image }: IProps) {
  return (
    <>
      <Pressable onPress={floatingFunction} style={styles.floatingBtnWrapper}>
        {image === 'rightArrow' ? (
          <Image source={require('../../assets/images/checkList/rightArrow.png')} />
        ) : image === 'edit' ? (
          <Image source={require('../../assets/images/checkList/edit.png')} />
        ) : (
          <Image source={require('../../assets/images/checkList/camera.png')} />
        )}
      </Pressable>
    </>
  );
}

export default FloatingBtn;
