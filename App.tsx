import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import RouteStackRoute from './src/routes/RootStack';

const App: FC = () => {
  return (
    <NavigationContainer>
      <RouteStackRoute />
    </NavigationContainer>
  );
};

export default App;
