import { NavigationContainer } from '@react-navigation/native';
import RouteStackRoute from './src/routes/RootStack';

export default () => {
  return (
    <NavigationContainer>
      <RouteStackRoute />
    </NavigationContainer>
  );
};
