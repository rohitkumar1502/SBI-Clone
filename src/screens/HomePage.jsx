import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
  SafeAreaViewBase,
} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
//Images
const HeaderImg = require('../assets/HomePageIcons/HederLogo.png');
const ThreeLine = require('../assets/HomePageIcons/threeLine.png');
const Map = require('../assets/HomePageIcons/map.png');
const loginImage = require('../assets/HomePageIcons/loginicon2.png');
const eye1 = require('../assets/HomePageIcons/eye2.png');
const Mahotsav = require('../assets/HomePageIcons/Azadi-Ka-Amrit-Mahotsav-Logo1.png');
const qr1 = require('../assets/HomePageIcons/qr1.png');
const contact = require('../assets/HomePageIcons/tandc1.png');
const payBank = require('../assets/HomePageIcons/bank1.png');
const Billpay = require('../assets/HomePageIcons/bill1.png');
const papadLock = require('../assets/HomePageIcons/padlock.png');
const tandc2= require('../assets/HomePageIcons/t&c2.png');
const prvacy= require('../assets/HomePageIcons/privacy2.png');
const phone= require('../assets/HomePageIcons/phone-call2.png');


import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const HomePage = ({navigation}) => {
  var date = moment().format('MMMM Do YYYY, h:mm:ss');
  return (
    <>
      <LinearGradient
        colors={['#4C0E5A', '#931D56']}
        style={styles.linearGradient}>
        <SafeAreaView>
          <View style={styles.hederContainer}>
            <Pressable>
              <Image source={ThreeLine} style={styles.threeline} />
            </Pressable>
            <Image source={HeaderImg} style={styles.HeaderImg} />
            <Pressable>
              <Image source={Map} style={styles.mapbtn} />
            </Pressable>
          </View>

          <View style={styles.textfield}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.nameText}>Rohit Kumar</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.inputCoantainer}>
              <View style={styles.lgcn}>
                <Image source={loginImage} style={styles.loginImage} />
                <Text style={styles.lgText}>LOGIN USING MPIN</Text>
              </View>
              <View style={styles.inputMpin}>
                <SmoothPinCodeInput
                  password
                  mask="﹡"
                  //ref={this.pinInput}
                  //value={code}
                  //onTextChange={code => this.setState({code})}
                  //onFulfill={this._checkCode}
                  //onBackspace={this._focusePrevInput}
                  codeLength={6}
                  cellStyle={{
                    backgroundColor: '#B77A9D',
                    borderRadius: 9,
                  }}
                />
              </View>
              <View style={styles.forgetcontainer}>
                <Pressable>
                  <Text style={styles.lgText}>Forgot MPIN?</Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 32,
                }}>
                <View
                  style={{flex: 1, height: 1, backgroundColor: '#B77A9D'}}
                />
                <View>
                  <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
                </View>
                <View
                  style={{flex: 1, height: 1, backgroundColor: '#B77A9D'}}
                />
              </View>
              <Pressable style={{alignItems: 'center', paddingVertical: 12}}>
                <Text
                  style={{color: '#621258', fontSize: 12, fontWeight: '600'}}>
                  Login using Username
                </Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
      
      <>
      <SafeAreaProvider>
        <View style={{alignItems: 'center', paddingVertical: 15}}>
          <Pressable style={styles.eyeContainer}>
            <View style={{flexDirection: 'row', paddingHorizontal: 6}}>
              <Image source={eye1} style={styles.eye} />
              <Text style={styles.balenceText}>VIEW BALANCE</Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 32,
                color: '#621258',
                fontWeight: '500',
                fontSize: 10,
              }}>
              View account balances and recent transactions.
            </Text>
          </Pressable>
          <Image
            source={Mahotsav}
            style={{height: 75, width: 130, marginVertical: 15}}
          />
          <Text style={{fontSize: 20, fontWeight: '600', color: '#34095A'}}>
            Quick Pay
          </Text>
          <View style={styles.bottombtn}>
            <Pressable style={styles.PressableBtn}>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <Image source={qr1} style={styles.bottomImage} />
                <Text
                  style={{fontSize: 10, fontWeight: '400', marginVertical: 5}}>
                  Scan & Pay
                </Text>
              </View>
            </Pressable>
            <Pressable style={styles.PressableBtn}>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <Image source={contact} style={styles.bottomImage} />
                <Text
                  style={{fontSize: 10, fontWeight: '400', marginVertical: 5}}>
                  Pay to Contact
                </Text>
              </View>
            </Pressable>
            <Pressable style={styles.PressableBtn}>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <Image source={payBank} style={styles.bottomImage} />
                <Text
                  style={{fontSize: 10, fontWeight: '400', marginVertical: 5}}>
                  Pay to Bank A/C
                </Text>
              </View>
            </Pressable>
            <Pressable style={styles.PressableBtn}>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <Image source={Billpay} style={styles.bottomImage} />
                <Text
                  style={{fontSize: 10, fontWeight: '400', marginVertical: 5}}>
                  Bill Pay
                </Text>
              </View>
            </Pressable>
          </View>
          <Pressable style={styles.remoneyOR}>
            <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>
              Receive Money via QR
            </Text>
          </Pressable>
        </View>

        <View style={styles.buttomContainer2}>
          <Pressable>
            <View style={styles.BtnView}>
              <Image source={papadLock} style={{height: 39, width: 39}} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: '400',
                  marginVertical: 4,
                }}>
                Lock App
              </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.BtnView}>
              <Image source={tandc2} style={{height: 49, width: 51}} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: '400',
                  marginVertical: 4,
                }}>
                T & C
              </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.BtnView}>
              <Image source={prvacy} style={{height: 32, width: 30}} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: '400',
                  marginVertical: 4,
                }}>
                Privacy Policy
              </Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.BtnView}>
              <Image source={phone} style={{height: 31, width: 32}} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                  fontWeight: '400',
                  marginVertical: 4,
                }}>
                Lock App
              </Text>
            </View>
          </Pressable>
        </View>
        </SafeAreaProvider>
      </>
      
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  buttomContainer2:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingVertical: 14,
  },
  BtnView: {
    height: 100,
    width: 105,
    backgroundColor: '#AF2354',
    justifyContent: 'center',
    alignItems: 'center',
  },
  remoneyOR: {
    backgroundColor: '#34095A',
    height: 22,
    width: 139,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PressableBtn: {
    paddingHorizontal: 17,
  },
  bottombtn: {
    flexDirection: 'row',
  },
  bottomImage: {
    height: 40,
    width: 40,
  },
  balenceText: {
    marginHorizontal: 6,
    fontSize: 16,
    fontWeight: '500',
    color: '#621258',
  },
  eye: {
    height: 19,
    width: 19,
  },
  eyeContainer: {
    backgroundColor: '#F4DDE5',
    borderRadius: 15,
    height: 60,
    width: 366,
    justifyContent: 'center',
  },
  forgetcontainer: {
    alignItems: 'flex-end',
    marginVertical: 7,
    paddingHorizontal: 32,
  },
  inputMpin: {
    alignItems: 'center',
  },
  lgText: {
    paddingHorizontal: 5,
    color: '#621258',
    fontWeight: '600',
  },
  lgcn: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  loginImage: {
    height: 18,
    width: 18,
  },
  boxContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  inputCoantainer: {
    width: 370,
    height: 197,
    backgroundColor: '#E6DAE6',
    borderRadius: 15,
  },
  dateContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 35,
  },
  dateText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
  textfield: {
    paddingHorizontal: 25,
    paddingVertical: 29,
  },
  welcomeText: {
    fontSize: 22,
    color: 'white',
  },
  nameText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
  hederContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  threeline: {
    height: 32,
    width: 32,
  },
  mapbtn: {
    height: 28,
    width: 26,
  },
  linearGradient: {
    //flex: 1,
    height: '52%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  container: {
    //flex: 2,
  },
  HeaderImg: {
    width: 155,
    height: 30,
    flexShrink: 0,
    marginTop: 10,
  },
  ThreeLine: {
    height: 300,
    width: 30,
  },
});
