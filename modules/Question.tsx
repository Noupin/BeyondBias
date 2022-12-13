//Third Party Imports
import React, { FC, useEffect, useState } from 'react';
import { Image, View } from 'react-native';

//First Party Imports
import { SText } from '../components/SText';
import { Styles } from '../Styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { colorState, progressColorState, progressState } from '../RecoilState';
import { answers, corrects, questions } from '../Constants';
import { homeStackNavigate } from '../helpers/Navigation';
import { NButton } from '../components/NButton';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const Question: FC = () => {
  const colors = useRecoilValue(colorState);

  const [correct, setCorrect] = useState(0)
  const [asked, setAsked] = useState(0)
  const [total, setTotal] = useState(5)

  const [asking, setAsking] = useState(true)
  const [wasRight, setWasRight] = useState(false)

  const [qs, setQs] = useState(questions)
  const [as, setAs] = useState(answers)
  const [cs, setCs] = useState(corrects)

  const [random, setRandom] = useState(getRandomInt(qs.length))
  const [question, setQuestion] = useState(qs[random])
  const [answer, setAnswer] = useState(as[random])

  const [progressColor, setProgressColor] = useRecoilState(progressColorState)
  const [progress, setProgress] = useRecoilState(progressState)

  useEffect(() => {
    if(correct/total > 0.9){
      homeStackNavigate('Pass')
    }
    else if(total === qs.length){
      homeStackNavigate('Fail')
    }

    let local = (correct/total)*100
    setProgress(local)
    if(local <= 33){
      setProgressColor(colors.redL)
    } else if(local <= 66){
      setProgressColor(colors.yellowL)
    } else{
      setProgressColor(colors.greenL)
    }

    // console.log(random)
    // console.log(qs[random], as[random], cs[random])
    // console.log(qs.length, as.length, cs.length)
    setQuestion(qs[random])
    setAnswer(as[random])
  }, [asked, colors])

  function checkAnswer(guess: number){
    // console.log(`Guess: ${as[guess]}, Correct: ${as[cs[random]]}`)
    if(guess === cs[random]){
      setCorrect(prev => prev+1)
      setWasRight(true)
    }
    else{
      setTotal(prev => prev+1)
      setWasRight(false)
    }

    setQs(prev => prev.filter((val, idx) => idx !== random))
    setAs(prev => prev.filter((val, idx) => idx !== random))
    setCs(prev => prev.filter((val, idx) => idx !== random))
    setAsking(false)
    setAsked(prev => prev+1)

    setRandom(getRandomInt(qs.length-1))
  }


  useEffect(() => {
    console.log(`Q: ${question}, As: ${answer}, A: ${answer[cs[random]]}`)
  }, [answer])

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: 'space-between'}}>
      <View style={[{flex: 1, alignItems: "center"}]}>

        <View key={cs.toString()} style={{flex: 1, display: 'flex', flexDirection: 'column', marginTop: 10, justifyContent: 'space-between'}}>
          <View style={[{flex: 3}, Styles.center]}>
            <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
              <View style={{flex: 1}}/>
              <SText style={asking ? {fontSize: 20, flex: 20} : {fontSize: 20, flex: 20, color: colors.background}}>{question}</SText>
              <View style={{flex: 1}}/>
            </View>
            <Image source={require('../q.png')/*Dimensions.get('window').width*/}
              style={{width: 368, height: 351}}/>
          </View>
    
          <View key={colors.background} style={{flex: 2, display: 'flex', flexDirection: 'column', width: "100%", minWidth: "100%",
          padding: 10}}>
            {asking ?
            <>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                { answer.length === 4 ?
                <>
                <NButton style={{flex: 1, marginHorizontal: 10, padding: 10, ...Styles.center}} borderRadius={Styles.borderRadius2} backgroundColor={colors.background}
                onPress={() => checkAnswer(0)}>
                  <SText style={Styles.textCenter}>{answer[0]}</SText>
                </NButton>
                <NButton style={{flex: 1, marginHorizontal: 10, padding: 10, ...Styles.center}} borderRadius={Styles.borderRadius2} backgroundColor={colors.background}
                onPress={() => checkAnswer(1)}>
                  <SText style={Styles.textCenter}>{answer[1]}</SText>
                </NButton>
                </>
                :
                <NButton style={{flex: 1, marginHorizontal: 5, padding: 5, ...Styles.center}} borderRadius={Styles.borderRadius2} backgroundColor={colors.background}
                onPress={() => checkAnswer(0)}>
                  <SText style={Styles.textCenter}>{answer[0]}</SText>
                </NButton>
                }
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row', marginTop: 10}}>
                { answer.length === 4 ?
                <>
                <NButton style={{flex: 1, marginHorizontal: 10, padding: 10, ...Styles.center}} borderRadius={Styles.borderRadius2} backgroundColor={colors.background}
                onPress={() => checkAnswer(2)}>
                  <SText style={Styles.textCenter}>{answer[2]}</SText>
                </NButton>
                <NButton style={{flex: 1, marginHorizontal: 10, padding: 10, ...Styles.center}} borderRadius={Styles.borderRadius2} backgroundColor={colors.background}
                onPress={() => checkAnswer(3)}>
                  <SText style={Styles.textCenter}>{answer[3]}</SText>
                </NButton>
                </>
                :
                <NButton style={{flex: 1, marginHorizontal: 5, padding: 5, ...Styles.center}} borderRadius={Styles.borderRadius2} backgroundColor={colors.background}
                onPress={() => checkAnswer(1)}>
                  <SText style={Styles.textCenter}>{answer[1]}</SText>
                </NButton>
                }
              </View>
            </>
            :
            <>
              {wasRight ?
              <View style={[Styles.borderRadius2, {flex: 1, display: 'flex', flexDirection: 'column', padding: 5,
              backgroundColor: colors.greenL, borderColor: colors.greenD, borderWidth: 2}]}>
                <View style={{flex: 2}}/>
                <SText style={[Styles.textCenter, {fontSize: 28, color: colors.greenD}]}>
                  Great Job! Keep going to understand your bias even more.
                </SText>
                <View style={{flex: 3}}/>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <NButton style={{margin: 5, padding: 5, display: 'flex', ...Styles.center}} borderRadius={Styles.borderRadius2}
                  backgroundColor={colors.greenL} radius={5} onPress={() => {setAsking(true)}}>
                    <SText style={[{fontSize: 20, padding: 10, color: colors.greenD}]}>Next Question</SText>
                  </NButton>
                </View>
                <View style={{flex: 2}}/>
              </View>
              :
              <View style={[Styles.borderRadius2, Styles.center, {flex: 1, display: 'flex', flexDirection: 'column', padding: 5,
              backgroundColor: colors.redL, borderColor: colors.redD, borderWidth: 2}]}>
                <View style={{flex: 2}}/>
                <SText style={[Styles.textCenter, {fontSize: 28, color: colors.redD}]}>
                  Nice try, keep on going to understand even more!
                </SText>
                <View style={{flex: 3}}/>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <NButton style={{margin: 5, padding: 5, display: 'flex', ...Styles.center}} borderRadius={Styles.borderRadius2}
                  backgroundColor={colors.redL} radius={5} onPress={() => {setAsking(true)}}>
                    <SText style={[{fontSize: 20, padding: 10, color: colors.redD}]}>Next Question</SText>
                  </NButton>
                </View>
                <View style={{flex: 2}}/>
              </View>
              }
            </>
            }
          </View>
        </View>

      </View>
    </View>
  );
}
