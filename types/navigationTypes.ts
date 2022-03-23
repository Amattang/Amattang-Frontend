import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

// onBoardingStack
export type OnBoardingStackParamsList = {
  landing: undefined;
  login: undefined;
  onBoarding: undefined;
  map: { activeType: boolean; address?: string | undefined; lat?: number; long?: number }; // undefined에서 수정했는데 또 다시 수정해도 됨
};
export type OnBoardingStackProps = NativeStackScreenProps<OnBoardingStackParamsList, 'landing'>;

// checkListStack
export type CheckListStackParamsList = {
  basicCheckList: undefined;
  profileSetting: undefined;
};

export type CheckListStackProps = NativeStackScreenProps<
  CheckListStackParamsList,
  'basicCheckList'
>;

// bottomTab
export type BottomTabParams = {
  home: undefined;
  checkList: any;
  map: undefined;
};

export type BottomTabProps = BottomTabScreenProps<BottomTabParams, 'home'>; // 혹시 props 쓸일 있을까봐 만들어둠

// Root
export type RootStackProps = {
  tab: NavigatorScreenParams<BottomTabParams>;
  stack: NavigatorScreenParams<CheckListStackParamsList>;
};

// nesting nav
export type NestedProps = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackProps, 'stack'>,
  NativeStackNavigationProp<CheckListStackParamsList>
>;

// basic CheckList
export type BasicCheckListParamsList = {
  basic: undefined;
  outside: undefined;
  inside: undefined;
  option: undefined;
};

export type BasicCheckListProps = MaterialTopTabScreenProps<BasicCheckListParamsList, 'basic'>;

// insideOfBasicCheckList
export type InsideOfBasicCheckList = {
  window: undefined;
  ceiling: undefined;
  kitchen: undefined;
  restroom: undefined;
  wall: undefined;
  entrance: undefined;
  option: undefined;
};
