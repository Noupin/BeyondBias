//Third Party Imports
import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { useRecoilValue } from 'recoil';
import { INeurmorphic, Neumorphic } from './Neumorphic';

//First Party Imports
import { colorState } from '../RecoilState';

export interface IButton extends TouchableOpacityProps, INeurmorphic{
  onPress?: (event?: any) => void
  style: ViewStyle
}

export const NButton: FC<IButton> = ({children, onPress, style, ...props}) => {

return (
  <TouchableOpacity {...props} onPress={onPress} style={{display: 'flex', flex: 1}}>
    <Neumorphic style={style} backgroundColor={props.backgroundColor!} radius={props.radius} borderRadius={props.borderRadius}>
      {children}
    </Neumorphic>
  </TouchableOpacity>
);
}