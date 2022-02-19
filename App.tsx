import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNav from './navigator/RootNav';

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
