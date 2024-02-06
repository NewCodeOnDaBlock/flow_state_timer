import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { AddTask } from './src/features/AddTask';
import { Timer } from './src/components/Timer';
import { StartButton } from './src/components/StartButton';
import { StopButton } from './src/components/StopButton';
import { PauseButton } from './src/components/PauseButton';
import { Pomodoro } from './src/components/Pomodoro';

export default function App({ onPress = { onPress } }) {
  const [currentTextInput, setCurrentTextInput] = useState(null);
  const [isStartTimerPressed, setIsStartTimerPressed] = useState(false);
  const [isStopTimerPressed, setIsStopTimerPressed] = useState(false);
  const [isPauseTimerPressed, setIsSPauseTimerPressed] = useState(false);

  const stopTimer = () => {
    if (isStartTimerPressed) {
      setIsStartTimerPressed(false);
    } else {
      setIsStartTimerPressed(true);
    }
  };
  const pauseTimer = () => {
    if (isPauseTimerPressed) {
      setIsSPauseTimerPressed(false);
    } else {
      setIsSPauseTimerPressed(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Think Flow App</Text>
      </View>
      {!currentTextInput ? (
        <AddTask addFlow={setCurrentTextInput} />
      ) : (
        <View style={styles.timerContainer}>
          <View style={styles.startTimeContainer}>
            {isStartTimerPressed ? (
              <View style={styles.timerContainer}>
                <Text style={styles.text}>
                  Focusing on: {currentTextInput}
                </Text>
              </View>
            ) : (
              <View style={styles.timerContainer}>
                <Text style={styles.text}>
                  Start your flow state timer for {currentTextInput}
                </Text>
              </View>
            )}
            {!isStartTimerPressed ? (
              <StartButton
                startTimer={setIsStartTimerPressed}
                isStartTimerPressed={isStartTimerPressed}
              />
            ) : (
              <View style={styles.stopTimeContainer}>
                <Timer isPauseTimerPressed={isPauseTimerPressed} />
                <View style={styles.buttons}>
                  <StopButton
                    stopTimer={stopTimer}
                    isStopTimerPressed={isStopTimerPressed}
                    isStartTimerPressed={isStartTimerPressed}
                  />
                  <PauseButton
                    pauseTimer={pauseTimer}
                    isPauseTimerPressed={isPauseTimerPressed}
                    setIsSPauseTimerPressed={setIsSPauseTimerPressed}
                  />
                </View>
                <View style={styles.pomodoro}>
                  <Pomodoro />
                </View>
              </View>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.backgroundDark,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: 80,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 900,
  },
  timerContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  text: {
    color: colors.textColor,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  startTimeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  stopTimeContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
  },
  buttons: {
    width: 320,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  pomodoro: {
    height: 350,
    width: 350,
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
});
