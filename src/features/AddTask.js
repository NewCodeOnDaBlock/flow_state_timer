import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { AddTaskButton } from '../components/AddTaskButton';

export const AddTask = ({ addFlow }) => {
  const [flowTextInput, setFlowTextInput] = useState(null);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputStyle}
        label="What task requires flow state today?"
        onChangeText={setFlowTextInput}
      />
      <View style={styles.buttonContainer}>
        <AddTaskButton onPress={() => addFlow(flowTextInput)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    padding: 25,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  inputStyle: {
    width: 280,
    height: 60,
    marginRight: 10,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    color: colors.inputTextColor,
  },
});
