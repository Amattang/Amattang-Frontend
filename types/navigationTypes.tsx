import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

// onBoardingStack
export type OnBoardingStackParamsList = {
  landing: undefined;
  login: undefined;
  onBoarding: undefined;
  goBack: (routeKey?: string | null) => boolean;
};
export type OnBoardingStackProps = NativeStackScreenProps<OnBoardingStackParamsList, 'landing'>;

// checkListStack
export type CheckListStackParamsList = {
  basicCheckList: undefined;
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
