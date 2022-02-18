import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNav from './navigator/RootNav';
import CheckListBtn from './navigator/CheckListBtn';
const navigationRef = React.createRef();

function App() {
  return (
    <>
      <NavigationContainer>
        <RootNav />
        <CheckListBtn navigationRef={navigationRef} />
      </NavigationContainer>
    </>
  );
}

export default App;
