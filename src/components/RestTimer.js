import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const RestTimer = () => {
  const initialTime = 5 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <View>
      <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  timerText: {
    fontSize: 35,
    fontWeight: 800,
    color: colors.textColor,
  },
});
