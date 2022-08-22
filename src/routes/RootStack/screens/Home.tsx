import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {};

const HomeScreen: FC<Props> = ({}) => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text>My beautifull app</Text>
      <Text></Text>
      <Pressable onPress={() => navigate('details')}>
        <Text style={styles.link}> {'-Details-'} </Text>
      </Pressable>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    // textDecorationStyle: 'dotted',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
});

export default HomeScreen;
