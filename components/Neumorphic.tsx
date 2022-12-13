//Third Party Imports
import React, { FC } from "react";
import { useTheme } from '@react-navigation/native';
import { NeomorphFlex, NeomorphFlexProps } from 'react-native-neomorph-shadows';

//First Party Imports
import { Styles } from "../Styles";
import { IChildren } from "../interfaces/IChildren";


export interface INeurmorphic extends NeomorphFlexProps{
  radius?: number
  borderRadius?: {borderRadius: number}
  backgroundColor?: string
  includeTheme?: boolean
}


export const Neumorphic: FC<INeurmorphic> = ({children, style, radius=4,
  includeTheme=true, backgroundColor='#ececec', borderRadius=Styles.borderRadius2}) => {

  const theme = useTheme()



  return (
    <NeomorphFlex key={String(theme.dark)} style={{backgroundColor: backgroundColor,
      shadowRadius: radius, ...borderRadius, ...style}}>
      {children}
    </NeomorphFlex>
  );
}