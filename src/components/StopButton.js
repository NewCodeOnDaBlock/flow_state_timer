import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  Platform,
} from 'react-native';
import { colors } from '../utils/colors';

export const StopButton = ({
  stopTimer,
  isStopTimerPressed,
  onPress = { onPress },
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => stopTimer(!isStopTimerPressed)}>
      <Text style={styles.buttonText}>Stop Timer</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 50,
    borderRadius: 125 / 2,
    borderWidth: 2,
    borderColor: colors.buttonBorder,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.buttonShadow,
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    color: colors.textColor,
    fontSize: 14,
    fontWeight: 'light',
  },
});
