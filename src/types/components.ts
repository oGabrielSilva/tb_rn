import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface IProps {
  children: ReactNode;
}

export interface IPropsSection extends IProps {
  sty?: StyleProp<ViewStyle>;
}
