import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faBars,faWallet } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '../../components/Colors';


 const Menuscreen = () => {


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
           < Text style={{color:Colors.primary,fontSize:20,fontWeight:900,}}>MAIN BAZAR</Text>
            </TouchableOpacity>
            
        </View>
        </View>
        </View>
        <View style={styles.listofscreen}>
            
            <View style={styles.listofmenu}>

                <TouchableOpacity style={styles.textbutton}>
                <Text style={styles.textinput}>Dashboard</Text>
                </TouchableOpacity>
             
            </View>

            <View style={styles.listofmenu} >

<TouchableOpacity style={styles.textbutton} >
<Text style={styles.textinput}>User Profile</Text>
</TouchableOpacity>

</View>

<View style={styles.listofmenu}>

<TouchableOpacity style={styles.textbutton} >
<Text style={styles.textinput}>My Wallet</Text>
</TouchableOpacity>

</View>

<View style={styles.listofmenu}>

<TouchableOpacity style={styles.textbutton}>
<Text style={styles.textinput}>Win History</Text>
</TouchableOpacity>

</View>
<View style={styles.listofmenu}>

<TouchableOpacity style={styles.textbutton}>
<Text style={styles.textinput}>Bid History</Text>
</TouchableOpacity>

</View>
       
<View style={styles.listofmenu}>

<TouchableOpacity style={styles.textbutton}>
<Text style={styles.textinput}>Game Rate</Text>
</TouchableOpacity>

</View>

<View style={styles.listofmenu}>

<TouchableOpacity style={styles.textbutton}>
<Text style={styles.textinput}>Notice</Text>
</TouchableOpacity>

</View>
<View style={styles.listofmenu}>

<TouchableOpacity style={styles.textbutton}>
<Text style={styles.textinput}>Share</Text>
</TouchableOpacity>
<View style={styles.listofmenu}>
<TouchableOpacity style={styles.textbutton}>
<Text style={styles.textinput}>Rating</Text>
</TouchableOpacity>
</View>
</View>
</View>

        

{/*        
       <View style={{justifyContent:"center", marginRight:5}}><Text style={{color:"white",alignItems:"center"}}>30.00</Text></View>  
        
        <View style={styles.navigationitem} >
        
            <TouchableOpacity>
            <FontAwesomeIcon icon={faWallet} color='white'/>
            </TouchableOpacity> */}
            
        
    
      </View>
     
    // </View>

  );
}

export default Menuscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
    },
    toptabbar:{
        flexDirection:"row",
        
        justifyContent:"space-around",
        height:100,
        alignItems:"center",
        backgroundColor:"#3b3933"
     },
 navigationbar:{
    marginBottom:5,
    height:30,
    width:300,
    flexDirection:"row",
    justifyContent:"flex-start"
    
    
},
headertext:{
    justifyContent:"center",
    alignItems:"center",
    marginLeft:60,
    marginRight:35,
},
 navigationitem:{
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
    height:30,
    width:30,
    marginRight:20,
    backgroundColor:Colors.primary,
 },
 listofscreen:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"

    

 },
 listofmenu:{
    flexDirection:"column",
    marginTop:20,

 },
 textbutton:{
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    height:40,
    width:320,
    borderColor:"white",
    borderRadius:10

 },
 
 textinput:{
    color:Colors.white,
 }
});