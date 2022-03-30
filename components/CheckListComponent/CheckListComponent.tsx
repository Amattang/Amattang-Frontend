import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { View } from 'react-native';
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
import ButtonsOfTypeM from './ButtonsOfTypeM';
import ButtonsOfTypeC from './ButtonsOfTypeC';

interface IProps {
  modal?: boolean;
  setModal?: Dispatch<SetStateAction<boolean>>;
  deletedCheckLists?: checkListTypes[];
  setDeletedCheckLists?: Dispatch<SetStateAction<checkListTypes[]>>;
  handlePresentModalPress?: () => void;
  isEdit: boolean;
  checkLists: checkListTypes[];
  checkList: checkListTypes;
  setCheckLists: Dispatch<SetStateAction<checkListTypes[]>>;
  onBoarding: boolean;
}

function CheckListComponent({
  modal,
  setModal,
  deletedCheckLists,
  setDeletedCheckLists,
  isEdit,
  checkLists,
  checkList,
  setCheckLists,
  onBoarding,
}: IProps) {
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

  useEffect(() => {
    translateX.value = 0;
  }, [isEdit]);

  return (
    <View style={styles.checkListWrapper}>
      <PanGestureHandler
        enabled={!onBoarding && isEdit}
        onGestureEvent={panGesture}
        activeOffsetX={[-0, 100]}
      >
        <Animated.View style={[rStyle]}>
          <View style={styles.whiteCard} key={checkList.questionId}>
            <DefaultText style={styles.checkListMainTitle}>{checkList.question}</DefaultText>
            <View style={styles.subTitles}>
              {checkList.rule ? (
                <View style={styles.checkListSubTitle}>
                  <DefaultText style={styles.emoji}>📘 </DefaultText>
                  <DefaultText style={styles.checkListGrayText}>{checkList.rule}</DefaultText>
                </View>
              ) : null}
              {checkList.description ? (
                <View style={styles.checkListSubTitle}>
                  <DefaultText style={styles.emoji}>👀 </DefaultText>
                  <DefaultText style={styles.checkListGrayText}>
                    {checkList.description}
                  </DefaultText>
                </View>
              ) : null}
            </View>
            <View style={styles.buttonsOfCheckList}>
              {checkList.type === 'A' ? (
                <ButtonsOfTypeA
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              ) : null}
              {checkList.type === 'B' ? (
                <ButtonsOfTypeB
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              ) : null}
              {checkList.type === 'C' ? (
                <ButtonsOfTypeC setModal={setModal} modal={modal} checkList={checkList} />
              ) : null}
              {checkList.type === 'D' ? (
                <ButtonsOfTypeD
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              ) : null}
              {checkList.type === 'M' ? (
                <ButtonsOfTypeM
                  isEdit={isEdit}
                  checkList={checkList}
                  setCheckLists={setCheckLists}
                  checkLists={checkLists}
                />
              ) : null}
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
      <ButtonOfGoToTrash
        deletedCheckLists={deletedCheckLists}
        setDeletedCheckLists={setDeletedCheckLists}
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
