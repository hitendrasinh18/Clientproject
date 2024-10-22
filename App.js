import { View,StyleSheet } from 'react-native';
import Homescreen from './src/Homescreen';
import Dashboard from './src/Dashboard';

 const App = () => {


  return (
    <View style={styles.container}>
      {/* <Homescreen/> */}
      <Dashboard></Dashboard>
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
});
