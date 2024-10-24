import { View,StyleSheet } from 'react-native';
// import Homescreen from './/scren/Homescreen';
// import Dashboard from './src/screen/Dashboard';
import Menuscreen from './src/screen/Menuscreen';

 const App = () => {


  return (
    <View style={styles.container}>
      {/* <Homescreen/> */}
      {/* <Dashboard/> */}
      <Menuscreen/>
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
});
