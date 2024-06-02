import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MainNavigation from './src/navigation/main';

export default function App() {
  return (
    <MainNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
