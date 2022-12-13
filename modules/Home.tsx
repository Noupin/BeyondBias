//Third Party Imports
import React, { FC, useState } from 'react';
import { Image, useColorScheme, View } from 'react-native';

//First Party Imports
import { SText } from '../components/SText';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SButton } from '../components/SButton';
import { questionScreenState, themeState } from '../RecoilState';
import { homeStackNavigate } from '../helpers/Navigation';
import { Styles } from '../Styles';

export const Home: FC = () => {
  const [questionScreen, setQuestionScreen] = useRecoilState(questionScreenState);
  const theme = useRecoilValue(themeState)
  const scheme = useColorScheme()

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: 'space-between'}}>
      <View style={[{flex: 1, alignItems: "center"}]}>

        <View style={{display: 'flex', flexDirection: 'column', marginTop: 10, justifyContent: 'space-between'}}>
          <View style={{flex: 1, marginTop: 50}}>
            <SText style={[Styles.textCenter, {fontSize: 28}]}>Beyond Bias</SText>
            <Image source={(theme === 'device' && scheme === 'dark') || theme === 'dark' ? require('../darkLogo.png') : require('../lightLogo.png')}
              style={{width: 300, height: 300}}/>
          </View>

          <View style={{marginBottom: 20}}>
            <SButton style={[Styles.borderRadius2, {padding: 15}]} onPress={() => {
              setQuestionScreen(true)
              homeStackNavigate('Question')
            }}>
              <SText style={[Styles.textCenter, {color: '#ECECEC'}]}>
                Go Beyond
              </SText>
            </SButton>
          </View>
        </View>

      </View>
    </View>
  );
}

function useRecoilVlaue(colorState: any): [any, any] {
  throw new Error('Function not implemented.');
}
