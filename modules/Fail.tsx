//Third Party Imports
import React, { FC } from 'react';
import { Dimensions, Image, View } from 'react-native';

//First Party Imports
import { SText } from '../components/SText';
import { SButton } from '../components/SButton';
import { Styles } from '../Styles';
import { homeStackNavigate } from '../helpers/Navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { colorState, questionScreenState } from '../RecoilState';
import { NButton } from '../components/NButton';


export const Fail: FC = () => {
  const colors = useRecoilValue(colorState);
  const [questionScreen, setQuestionScreen] = useRecoilState(questionScreenState);

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: 'space-between'}}>
      <View style={[{flex: 1, alignItems: "center"}]}>

        <View style={{flex: 1, display: 'flex', flexDirection: 'column', marginTop: 10, justifyContent: 'space-between'}}>
          <View style={[{flex: 2, alignItems: 'center', marginTop: 10}]}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1}}/>
              <SText style={[Styles.textCenter, {fontSize: 26, flex: 20}]}>Lets take a day and try again.</SText>
              <View style={{flex: 1}}/>
            </View>
          </View>
          <View style={[{flex: 2}, Styles.center]}>
            <Image source={require('../f.png')/*Dimensions.get('window').width*/}
              style={{width: Dimensions.get('window').width-20, height: 220}}/>
          </View>

          <View style={[{flex: 2}, Styles.center]}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1}}/>
              <SText style={[Styles.textCenter, {fontSize: 26, flex: 20}]}>Come back tomorrow to understand even more!</SText>
              <View style={{flex: 1}}/>
            </View>
          </View>
    
          <View style={[Styles.borderRadius2, Styles.center, {flex: 1, display: 'flex', flexDirection: 'column', padding: 5,
          backgroundColor: colors.redL, borderColor: colors.redD, borderWidth: 2}]}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <NButton style={{margin: 5, padding: 5, display: 'flex', ...Styles.center}} borderRadius={Styles.borderRadius2}
              backgroundColor={colors.redL} radius={5} onPress={() => {setQuestionScreen(false);homeStackNavigate('Home')}}>
                <SText style={[{fontSize: 20, padding: 10, color: colors.redD}]}>Go Back to Home</SText>
              </NButton>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}
