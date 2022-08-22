import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import {DetailsScreen} from './screens/Details';
import {HomeScreen} from './screens/Home';

type RootStackParams = {
  home: undefined;
  details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootStackRoute: FC = () => (
  <Stack.Navigator initialRouteName='home'>
    <Stack.Screen name='home' component={HomeScreen} />
    <Stack.Screen name='details' component={DetailsScreen} />
  </Stack.Navigator>
);

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}
