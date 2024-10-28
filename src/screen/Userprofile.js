import { View,StyleSheet,Text,TouchableOpacity,Image } from 'react-native';
import { Colors } from '../../components/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faWallet } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-gesture-handler';

 const Userprofile = () => {


  return (
    <View style={styles.container}>
      <View style={styles.toptabbar}>
            <View style={styles.navigationbar}>
               <View style={styles.navigationitem}>
                  <TouchableOpacity>
                     <FontAwesomeIcon icon={faBars} color='white' />
                  </TouchableOpacity>

               </View>
               <View style={styles.headertext}>
                  <TouchableOpacity>
                     < Text style={{ color: Colors.primary, fontSize: 20, fontWeight: 900, }}>MAIN BAZAR</Text>
                  </TouchableOpacity>

               </View>
            </View>
     </View>
     <View style={styles.Userprofileimage}>
        <Image source={require("../../components/images/userprofile.png") }style={{height:180,width:180, }}></Image>
        <Text style={{fontSize:30,fontWeight:900,color:"orange",}}>0000804000</Text>
        
     </View>
    
    </View>

  );
}

export default Userprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    },
    toptabbar: {
        flexDirection: "row",
  
        justifyContent: "space-around",
        height: 100,
        alignItems: "center",
        backgroundColor: "#3b3933"
     },
     navigationbar: {
        marginBottom: 5,
        height: 30,
        width: 300,
        flexDirection: "row",
        justifyContent: "flex-start"
  
  
     },
     headertext: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 60,
        marginRight: 35,
     },
     navigationitem: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        height: 30,
        width: 30,
        marginRight: 20,
        backgroundColor: Colors.primary,
     },
     Userprofileimage:{
        marginTop:30,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
     }
});
