import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {};

export const HomeScreen: FC<Props> = ({}) => {
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
    paddingBottom: 40,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
