import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNav from './navigator/RootNav';
import 'react-native-gesture-handler';

function App() {
  return (
    <>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </>
  );
}

export default App;
