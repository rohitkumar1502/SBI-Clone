import React from 'react';
import {} from 'react-native';
//import LandingPage from './components/landingPage/LandingPage';
//import Login from './components/HomePage/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MyStacks from './stacks/MyStacks';

function App(): React.JSX.Element {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <MyStacks />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default App;
