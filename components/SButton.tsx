//Third Party Imports
import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useRecoilValue } from 'recoil';

//First Party Imports
import { colorState } from '../RecoilState';


export const SButton: FC<TouchableOpacityProps> = ({children, onPress, style, ...props}) => {
  const colors = useRecoilValue(colorState)

  return (
    <TouchableOpacity {...props} onPress={onPress} style={[{backgroundColor: colors.button}, style]}>
      {children}
    </TouchableOpacity>
  );
}