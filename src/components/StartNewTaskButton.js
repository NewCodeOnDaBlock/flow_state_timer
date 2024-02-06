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

export const StartNewTaskButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>
        Start a new task
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 50,
    borderRadius: 125/2,
    borderWidth: 2,
    borderColor: colors.buttonBorder,
    marginTop: 20,
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
