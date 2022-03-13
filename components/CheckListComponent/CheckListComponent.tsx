import React, { Dispatch, SetStateAction } from 'react';
import { Image, Pressable, View } from 'react-native';
import { checkListTypes } from '../../types/checkListTypes';
import styles from './styles';
import ButtonsOfTypeA from './ButtonsOfTypeA';
import ButtonsOfTypeD from './ButtonsOfTypeD';
import { DefaultText } from '../../CustomText';
import ButtonsOfTypeB from './ButtonsOfTypeB';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ButtonOfGoToTrash from './ButtonOfGoToTrash';

interface IProps {
  handlePresentModalPress?: () => void;
  isEdit: boolean;
  checkLists: checkListTypes[];
  checkList: checkListTypes;
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
}

function CheckListComponent({ isEdit, checkLists, checkList, setCheckLists }: IProps) {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value > -40;
      if (shouldBeDismissed) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(-80);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <View style={styles.checkListWrapper}>
      <PanGestureHandler
        enabled={true}
        onGestureEvent={panGesture}
        activeOffsetX={[0, 0]}
        activeOffsetY={1000}
      >
        <Animated.View style={[rStyle]}>
          <View style={styles.whiteCard} key={checkList.questionId}>
            <DefaultText style={styles.checkListMainTitle}>{checkList.question}</DefaultText>
            <View style={styles.subTitles}>
              {checkList.subCategory && (
                <View style={styles.checkListSubTitle}>
                  <DefaultText style={styles.emoji}>📘 </DefaultText>
                  <DefaultText style={styles.checkListGrayText}>
                    {checkList.subCategory}
                  </DefaultText>
                </View>
              )}
              {checkList.description && (
                <View style={styles.checkListSubTitle}>
                  <DefaultText style={styles.emoji}>👀 </DefaultText>
                  <DefaultText style={styles.checkListGrayText}>
                    {checkList.description}
                  </DefaultText>
                </View>
              )}
            </View>

            <View style={styles.buttonsOfCheckList}>
              {checkList.type === 'A' && (
                <ButtonsOfTypeA
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              )}
              {checkList.type === 'B' && (
                <ButtonsOfTypeB
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              )}
              {checkList.type === 'C' && <DefaultText>c</DefaultText>}
              {checkList.type === 'D' && (
                <ButtonsOfTypeD
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              )}
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
      <ButtonOfGoToTrash
        translateX={translateX}
        rStyle={rStyle}
        isEdit={isEdit}
        checkList={checkList}
        setCheckLists={setCheckLists}
        checkLists={checkLists}
      />
    </View>
  );
}

export default CheckListComponent;
