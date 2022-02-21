import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

// checkListstack
export type CheckListStackParamsList = {
  custom: undefined;
  basic: undefined;
};

export type CheckListStackProps = NativeStackScreenProps<CheckListStackParamsList, 'custom'>;

// bottomTab
export type BottomTabParams = {
  home: undefined;
  vote: undefined;
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

// custom CheckList
export type CustomCheckListParamsList = {
  basic: undefined;
  more: undefined;
  item: undefined;
};
export type CustomCheckListProps = MaterialTopTabScreenProps<CustomCheckListParamsList, 'basic'>;

// basic CheckList
export type BasicCheckListParamsList = {
  basic: undefined;
  outside: undefined;
  inside: undefined;
  option: undefined;
};
export type BasicCheckListProps = MaterialTopTabScreenProps<BasicCheckListParamsList, 'basic'>;
