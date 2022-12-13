//Third Party Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRecoilState } from 'recoil';

//First Party Imports
import { COLORS } from './Constants';
import { getJSONAsyncStorage, setJSONAsyncStorage } from './helpers/AsyncStorage';
import { homeStackNavigationRef } from './helpers/Navigation';
import { Fail } from './modules/Fail';
import { Home } from './modules/Home';
import { Pass } from './modules/Pass';
import { Question } from './modules/Question';
import { ScreenContainer } from './modules/ScreenContainer';
import { colorState, initialState, themeState } from './RecoilState';
import { TTheme } from './types/TTheme';



const Stack = createNativeStackNavigator();
const App = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const [initial, setInitial] = useRecoilState(initialState)
  const [colors, setColors] = useRecoilState(colorState)
  const scheme = useColorScheme()

  useEffect(() => {
    async function loadFromStorage(){
      let localTheme = await getJSONAsyncStorage('theme') as TTheme
      if(localTheme) setTheme(localTheme)
      setInitial(true)
    }

    loadFromStorage()
  }, [])

  useEffect(() => {
    setColors((theme === 'device' && scheme === 'dark') || theme === 'dark' ? COLORS.dark : COLORS.light)
  }, [theme, scheme])

  useEffect(() => {
    if(!initial) return

    setJSONAsyncStorage('theme', theme)
  }, [theme])

  useEffect(() => {
    
  }, [])

  return (
    <>
      <StatusBar barStyle={colors.statusBar}/>
      <SafeAreaProvider>
        <NavigationContainer ref={homeStackNavigationRef}>
          <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home">
              {(props) => (
                <ScreenContainer {...props}>
                  <Home/>
                </ScreenContainer>
              )}
            </Stack.Screen>
            <Stack.Screen name="Question">
              {(props) => (
                <ScreenContainer {...props}>
                  <Question/>
                </ScreenContainer>
              )}
            </Stack.Screen>
            <Stack.Screen name="Pass">
              {(props) => (
                <ScreenContainer {...props}>
                  <Pass/>
                </ScreenContainer>
              )}
            </Stack.Screen>
            <Stack.Screen name="Fail">
              {(props) => (
                <ScreenContainer {...props}>
                  <Fail/>
                </ScreenContainer>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;