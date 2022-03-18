import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import HomeStackNavigator from './app/navigation';
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
<NavigationContainer> 
     <HomeStackNavigator/>
   </NavigationContainer>
    </Provider>
   
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
