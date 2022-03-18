import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Search from './app/screens/Search';
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
<Search/>
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
