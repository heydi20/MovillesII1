import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './navigators/BottomNavigator';
import MainNavigator from './navigators/MainNavigator';

export default function App() {

  
  return (
  <MainNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
