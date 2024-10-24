import { View, StyleSheet, Image, SafeAreaView, FlatList,Text,StatusBar, TouchableOpacity, } from 'react-native';
import { Colors } from '../../components/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faPhone, faBars,faWallet } from '@fortawesome/free-solid-svg-icons';


 




const Data = [
    {
        id: "1",
        title: "SHRIDEVI",
    },
    {
        id: "2",
        title: "KALYAN NIGHT",
    },
    {
        id: "3",
        title: "RAJDHANI NIGHT",
    },
    {
        id: "4",
        title: "MAIN BAZAR",
    },
]

const Item = ({ title }) =>
   
   <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>




const Dashboard = () => {
   


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
       
       <View style={{justifyContent:"center", marginRight:5}}><Text style={{color:"white",alignItems:"center"}}>30.00</Text></View>  
        
        <View style={styles.navigationitem} >
        
            <TouchableOpacity>
            <FontAwesomeIcon icon={faWallet} color='white'/>
            </TouchableOpacity>
            
        </View>
    </View>  
   </View>

      
 <Image source={require("../../components/images/logoimage.png")} style={{ height: 180, width: 330, borderRadius: 30, marginLeft: 15 }} />
<View style={styles.secondtabbar}>
<View style={styles.tabbar}>
<FontAwesomeIcon icon={faWhatsapp} color='green' size={24} />
</View>
<View style={styles.tabbar}>
<Image source={require("../../components/images/share.png")} style={{height:20,width:20,}}/>
</View>
<View style={styles.tabbar}>
<FontAwesomeIcon icon={faPhone} color='red' />
</View>
<View style={styles.tabbar}>
<FontAwesomeIcon icon={faGlobe} color='yellow' />
</View>
<View style={{height:40,width:90, color:Colors.white,backgroundColor:"orange", marginLeft:90,flexDirection:"row",justifyContent:"center",alignItems:"center",borderRadius:10}}>
    <Text style={{color:"white",}}>+ Add Point</Text>
</View>

</View>




            <SafeAreaView style={styles.safearea}>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />

            </SafeAreaView>
        </View>



    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black",

    },
    toptabbar:{
        flexDirection:"row",
        
        justifyContent:"space-around",
        marginBottom:20,
        backgroundColor:"#3b3933"
     },
 navigationbar:{
    marginBottom:5,
    height:30,
    width:330,
    flexDirection:"row",
    justifyContent:"space-between"
    
    
},
headertext:{
    justifyContent:"center",
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
    secondtabbar:{
        flexDirection:"row",
        marginTop:5

    },
    tabbar:{
        justifyContent:"center",
        alignItems:"center",
        height:30,
        width:30,
        backgroundColor:"#3b3933",
        margin:5,
        borderRadius:5,
    },
    safearea:{
           marginTop:5,
           
          },
          item: {
            backgroundColor:Colors.white,
            height:90,
            padding: 10,
            borderRadius:20,
            marginVertical: 8,
            marginHorizontal: 16,
          },
          title: {
            fontSize: 10,
          },
        });
 
