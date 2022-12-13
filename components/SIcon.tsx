//Third Party Imports
import React, { FC } from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { useRecoilValue } from 'recoil';

//First Party Imports
import { colorState } from '../RecoilState';


interface IIcon extends IconProps{}

export const SIcon: FC<IIcon> = (props) => {
  const colors = useRecoilValue(colorState)

  return (
    <Icon size={20} color={colors.text} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}
    {...props}/>
  );
}