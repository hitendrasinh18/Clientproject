import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../components/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Homescreen = () => {

  return (

    <View style={styles.container}>

      <View style={styles.headername}>
        <Text style={styles.header}>Sign In</Text>
      </View>

      <View style={styles.inputbox}>
        <TextInput placeholder='Phone Number' placeholderTextColor="white" style={styles.TextInput}></TextInput>
        <TextInput placeholder='Password' placeholderTextColor="white" style={styles.TextInput}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </TextInput>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotpassword}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Loginbutton}>
        <Text style={styles.continuebutton}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.bottomtext}>
        <Text style={{ color: "white" }}>Don't have account?</Text>
        <TouchableOpacity >
          <Text style={{ color: "#c7a51c", marginLeft:5 }}>Signup</Text>
        </TouchableOpacity>

      </View>

    </View>


  );
}

export default Homescreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
  header: {
    marginTop:150,
    fontSize:20,
    color: "#c7a51c",
    marginLeft:30,

  },

  TextInput: {
    marginStart:30,
    borderWidth: 1,
    margin: 10,
    height:40,
    width:290,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#3b3933"

  },
  forgotpassword:{
    color:Colors.white,
    marginLeft:30,
  },

  button: {
    flexDirection: "column"
 },

  Loginbutton: {
    borderWidth: 1,
    marginTop:300,
    height:50,
    width:290,
    backgroundColor: "#c7a51c",
    borderRadius: 7,
    alignItems: "center",
    justifyContent:"center",
    marginStart:35,

  },
  continuebutton:{
    fontSize:15,
    color:Colors.white,
  

  },
  bottomtext: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    

  }



});