import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LandingPage = () => {
  return (
    <LinearGradient
      colors={['#4C0E5A', '#931D56']}
      style={styles.linearGradient}>
      <>
        <SafeAreaView style={styles.container}>
          <View>
            <Image
              style={styles.img}
              source={require('../../assets/yono.png')}
            />
          </View>
        </SafeAreaView>
      </>
    </LinearGradient>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  img: {
    height: 290,
    width: 292,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
