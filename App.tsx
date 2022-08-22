import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { RootStackRoute } from './src/routes/RootStack';

const App: FC = () => {
  return (
    <NavigationContainer>
      <RootStackRoute />
    </NavigationContainer>
  );
};

export default App;
