//Third Party Imports
import React, { FC } from 'react';
import { View, TouchableOpacity, Alert, Animated, StyleSheet } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

//First Party Imports
import { Styles } from '../Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorState, progressColorState, progressState, questionScreenState, themeState } from '../RecoilState';
import { BACK_ICON, NEXT_THEME, THEME_COLORS, THEME_ICON, THEME_ICON_TYPE } from '../Constants';
import { homeStackNavigate } from '../helpers/Navigation';
import { IChildren } from '../interfaces/IChildren';
import { SIcon } from '../components/SIcon';
import { NButton } from '../components/NButton';


export const ScreenContainer: FC<IChildren> = ({ children }) => {
  const colors = useRecoilValue(colorState);
  const [theme, setTheme] = useRecoilState(themeState);
  const [questionScreen, setQuestionScreen] = useRecoilState(questionScreenState);
  const progressColor = useRecoilValue(progressColorState)
  const progress = useRecoilValue(progressState)

  const createBackAlert = () => (
    Alert.alert(
      "Go Back?",
      "Are you sure you want to go back? If you do all your progress will be reset.",
      [
        {
          text: "Go Home",
          onPress: () => {
            setQuestionScreen(false)
            homeStackNavigate('Home')
          },
          style: "destructive"
        },
        {
          text: "Stay",
          onPress: () => console.log("Cancel Pressed"),
        }
      ]
    )
  )

  let headerBarComponent = (
    <View style={[Styles.headerBarContainer]}>
      <View style={{flex: 14}}/>

      <View style={[Styles.borderRadiusC, Styles.center, {padding: 7, flex: 2}]}>
        <NButton key={colors.background} borderRadius={Styles.borderRadiusC} backgroundColor={colors.background}
        style={{padding: 5}} onPress={() => {
        setTheme(NEXT_THEME[theme])
        }}>
          <SIcon name={THEME_ICON[theme]} type={THEME_ICON_TYPE[theme]}
            color={theme === 'device' ? colors.text:THEME_COLORS[theme]}/>
        </NButton>
      </View>
    </View>
  )

  if(questionScreen){
    headerBarComponent = (
      <View key={colors.background} style={[Styles.headerBarContainer]}>
        <View style={[Styles.borderRadiusC, Styles.center, {flex: 2, alignItems: 'flex-start'}]}>
          <TouchableOpacity style={[Styles.borderRadiusC, Styles.center, {padding: 5}]} onPress={() => {
            createBackAlert()
          }}>
            <SIcon name={BACK_ICON.name} type={BACK_ICON.type} size={20} color={colors.text}/>
          </TouchableOpacity>
        </View>

        <View style={[Styles.progressContainer, Styles.center, {flex: 12}]}>
          <View style={[Styles.progressBar, {backgroundColor: colors.background, borderColor: colors.text}]}>
            <Animated.View style={[StyleSheet.absoluteFill, Styles.borderRadiusC,
              {backgroundColor: `${progressColor}`, width: `${progress}%`}]}/>
          </View>
        </View>

        <View style={[Styles.borderRadiusC, Styles.center, {padding: 7, flex: 2, alignItems: 'flex-end'}]}>
          <NButton key={colors.background} borderRadius={Styles.borderRadiusC} backgroundColor={colors.background}
          style={{padding: 5}} onPress={() => {
          setTheme(NEXT_THEME[theme])
          }}>
            <SIcon name={THEME_ICON[theme]} type={THEME_ICON_TYPE[theme]}
              color={theme === 'device' ? colors.text:THEME_COLORS[theme]}/>
          </NButton>
        </View>
      </View>
    )
  }

  return(
    <SafeAreaView style={[Styles.container, {width: "100%", backgroundColor: colors.background}]}>
      <View style={[Styles.container, {width: "100%"}]}>
        {headerBarComponent}

        <View style={[Styles.container, {justifyContent: 'space-between'}]}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}