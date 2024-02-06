import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { colors } from '../utils/colors';

export const Pomodoro = () => {
  return (
    <Text style={styles.text}>
      The Pomodoro Technique is a time management method that uses a timer to
      break work into intervals, traditionally 25 minutes in length, separated
      by short breaks. This technique aims to enhance focus and productivity by
      encouraging individuals to work in short, concentrated bursts, known as
      "pomodoros," followed by brief periods of rest. By incorporating regular
      breaks, it helps maintain mental agility and reduces the likelihood of
      burnout, ultimately improving overall work efficiency and output.
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.textColor,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'light',
    lineHeight: 25,
  },
});
