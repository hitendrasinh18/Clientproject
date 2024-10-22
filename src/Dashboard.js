import { View, StyleSheet, Image, SafeAreaView, FlatList,Text,StatusBar } from 'react-native';
import { Colors } from '../components/Colors';

const Dashboard = () => {
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


    return (

        <View style={styles.container}>

            <Image source={require("../components/images/logoimage.png")} style={{ height: 180, width: 330, borderRadius: 30, marginLeft: 15 }} />

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
    safearea:{
           marginTop: StatusBar.currentHeight || 0,
           
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
 
