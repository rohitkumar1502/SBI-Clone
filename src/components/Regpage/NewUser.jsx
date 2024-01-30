import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
//Images
const HeaderImg = require('../../assets/SBI_YONO_Header.png');

//Lnear-Gradint Text

//Checkbox
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import TextGradient from '../Gradient/TextGradient';

const NewUser = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={HeaderImg} style={styles.HeaderImg} />
        </View>
        <View>
          <TextGradient name="Existing SBI Customer" />
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.fieldContainer}>
            <Text style={styles.name}>Name</Text>
            <TextInput placeholder="Enter Your Name" style={styles.inputText} />
          </View>
          <View>
            <Text style={styles.name}>Email</Text>
            <TextInput
              placeholder="Enter Your Email"
              style={styles.inputText}
            />
          </View>
          <View>
            <Text style={styles.name}>Password</Text>
            <TextInput placeholder="********" style={styles.inputText} />
          </View>
          <View>
            <Text style={styles.name}>Confirm password</Text>
            <TextInput placeholder="********" style={styles.inputText} />
          </View>
          <View>
            <Text style={styles.name}>MPIN</Text>
            <TextInput placeholder="******" style={styles.inputText} />
          </View>
        </View>
        <View style={styles.checkConatiner}>
          <BouncyCheckbox
            fillColor="#931D56"
            unfillColor="#FFFFFF"
            onPress={() => {}}
          />
          <Text style={{fontSize: 14}}>I understood the terms & policy.</Text>
        </View>
        <View style={styles.container}>
          <LinearGradient
            colors={['#4C0E5A', '#931D56']}
            style={styles.sinupBtn}>
            <Pressable onPress={() => navigation.navigate('HomePage')}>
              <Text style={styles.SignupTx}>SIGN UP</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewUser;

const styles = StyleSheet.create({
  SignupTx: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  sinupBtn: {
    height: 46,
    width: 369,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  checkConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  fieldContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  HeaderImg: {
    width: 155,
    height: 30,
    flexShrink: 0,
    marginTop: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputText: {
    height: 46,
    //borderWidth: 1,
    borderRadius: 10,
    width: 368,
    marginTop: 5,
    backgroundColor: '#FAFAFA',
  },
  name: {
    fontWeight: '400',
    fontSize: 18,
  },
});
