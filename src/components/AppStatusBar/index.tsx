import React from 'react';
import {ColorValue} from 'react-native';
import {StatusBar, StatusBarProps} from 'react-native';

interface IProps {
  backgroundColor: ColorValue;
  props?: StatusBarProps;
}
export const AppStatusBar: React.FC<IProps> = ({backgroundColor, ...props}) => {
  return <StatusBar backgroundColor={backgroundColor} {...props} />;
};
