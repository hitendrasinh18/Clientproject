import { View,StyleSheet } from 'react-native';
import Homescreen from './src/Homescreen';

 const App = () => {


  return (
    <View style={styles.container}>
      <Homescreen/>
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
});
