//Third Party Imports
import React, { FC } from 'react';
import { TextProps, Text } from 'react-native-elements';
import { useRecoilValue } from 'recoil';

//First Party Imports
import { colorState } from '../RecoilState';


interface IText extends TextProps{}

export const SText: FC<IText> = ({children, style, ...props}) => {
  const colors = useRecoilValue(colorState)

  return (
    <Text key={colors.text} {...props} style={[{color: colors.text}, style]}>
        {children}
    </Text>
  );
}