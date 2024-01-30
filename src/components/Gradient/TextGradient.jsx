import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';

const TextGradient = props => {
  return (
    <LinearTextGradient
      locations={[0, 0]}
      colors={['#4C0E5A', '#931D56']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.existingText}>
      <Text>{props.name}</Text>
    </LinearTextGradient>
  );
};
const styles = StyleSheet.create({
  existingText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '800',
  },
});
export default TextGradient;
