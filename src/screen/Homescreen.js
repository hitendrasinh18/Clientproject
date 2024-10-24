import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Colors } from '../../components/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'


const Homescreen = () => {

  return (

    <View style={styles.container}>
      <View style={styles.Homepage}>
        <View style={styles.mainbox}>
          <Image source={require("../components/images/logoimage.png")} style={{height:100,width:100,marginBottom:50 }}/>
          <View style={styles.headername}>
            <Text style={styles.header}>Sign In</Text>
          </View>
          <View style={styles.Textbutton}>
            <TextInput placeholder='Phone Number' placeholderTextColor="white" style={styles.TextInput}></TextInput>
          </View>
          <View style={styles.Textbutton}>
            <TextInput placeholder='Password' placeholderTextColor="white" style={styles.TextInput}>
            </TextInput>
            <FontAwesomeIcon icon={faEye} color='white' style={{ marginTop: 10 }}></FontAwesomeIcon>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotpassword}>Forgot Password ?</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.bottombox}>
          <TouchableOpacity style={styles.Loginbutton}>
          <Text style={styles.continuebutton}>Continue</Text>
        </TouchableOpacity>
          <View style={styles.bottomtext}>
            <Text style={{ color: "white" }}>Don't have account?</Text>
            <TouchableOpacity >
              <Text style={{ color: Colors.primary, marginLeft: 5 }}>Signup</Text>
            </TouchableOpacity>
          </View>

        </View>
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
  Homepage: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainbox: {
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  bottombox:{
    marginTop:250,
     flexDirection:"column",
    },

  header: {
    fontSize: 25,
    color: Colors.primary,
    marginRight:240,
  },

  Textbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    borderWidth: 1,
    margin: 10,
    height: 50,
    width: 290,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#3b3933"
  },
  TextInput:{color:Colors.white},
  forgotpassword: {
    marginRight:170,
    color: Colors.white,
  },

 Loginbutton: {
    borderWidth: 1,
    height: 50,
    width: 290,
    backgroundColor: Colors.primary,
    borderRadius: 7,
    alignItems: "center",
    justifyContent:"center",
  },
  
  continuebutton: {
    fontSize: 15,
    
    color: Colors.white,


  },
  bottomtext: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,


  }



});