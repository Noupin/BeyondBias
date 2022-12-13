//Third Party Imports
import React, { FC } from 'react';
import { Image, View } from 'react-native';

//First Party Imports
import { SText } from '../components/SText';
import { SButton } from '../components/SButton';
import { Styles } from '../Styles';
import { homeStackNavigate } from '../helpers/Navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { colorState, questionScreenState } from '../RecoilState';
import { NButton } from '../components/NButton';


export const Pass: FC = () => {
  const colors = useRecoilValue(colorState);
  const [questionScreen, setQuestionScreen] = useRecoilState(questionScreenState);

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: 'space-between'}}>
      <View style={[{flex: 1, alignItems: "center"}]}>

        <View style={{flex: 1, display: 'flex', flexDirection: 'column', marginTop: 10, justifyContent: 'space-between'}}>
          <View style={[{flex: 2, alignItems: 'center', marginTop: 10}]}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1}}/>
              <SText style={[Styles.textCenter, {fontSize: 28, flex: 20}]}>Nice Job!  You understand your bias now!</SText>
              <View style={{flex: 1}}/>
            </View>
          </View>
          <View style={[{flex: 3}, Styles.center]}>
            <Image source={require('../p.png')/*Dimensions.get('window').width*/}
              style={{width: 368, height: 271}}/>
          </View>

          <View style={[{flex: 2}, Styles.center]}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1}}/>
              <SText style={[Styles.textCenter, {fontSize: 28, flex: 20}]}>More bias understanding to come. Congratulations!</SText>
              <View style={{flex: 1}}/>
            </View>
          </View>
    
          <View style={[Styles.borderRadius2, Styles.center, {flex: 1, display: 'flex', flexDirection: 'column', padding: 5,
          backgroundColor: colors.greenL, borderColor: colors.greenD, borderWidth: 2}]}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <NButton style={{margin: 5, padding: 5, display: 'flex', ...Styles.center}} borderRadius={Styles.borderRadius2}
              backgroundColor={colors.greenL} radius={5} onPress={() => {setQuestionScreen(false);homeStackNavigate('Home')}}>
                <SText style={[{fontSize: 20, padding: 10, color: colors.greenD}]}>Go Back to Home</SText>
              </NButton>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}
