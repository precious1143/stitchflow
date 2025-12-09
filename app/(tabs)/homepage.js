import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions,FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { evenData } from "../../assets/localdata/fashionstyle";
import { appStyles} from "../../utilities/mainstyle"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from "expo-font";


function ImageSeperator(){
    return(
        <View style={{width:"100%",height:50}}>

        </View>
   )}
   
export default function Homepage(){
    const [fontsLoaded] = useFonts({
        "AvegasRoyale-Bold":require("../../assets/fonts/AvegasRoyale-Bold.ttf"),
        "AvegasRoyale-Regular":require("../../assets/fonts/AvegasRoyale-Regular.ttf"),
        "Paterna":require("../../assets/fonts/Paterna.otf"),
        "ReilycElegantDemo-Regular":require("../../assets/fonts/ReilycElegantDemo-Regular.otf"),
        

    })
    if(!fontsLoaded){
        return null;
    };
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                  <View style={appStyles.headerView}><Text style={appStyles.headerText}>DESIGN GALLARY</Text></View>
                  <View>
                    
                     
                     <FlatList
                     data={evenData}
                     ItemSeparatorComponent={ImageSeperator}

                     renderItem={({item}) =>{
                        return(
                            <View style={{paddingHorizontal:4}}>
                                <Image
                                    source={item.Imgurl}
                                    style ={appStyles.Flatimg}
                                />  
                                <View style={appStyles.iconView}>
                                     <Text style={appStyles.designerName}> Designer: {item.designer}</Text>
                                    <View style ={appStyles.iconDisplay}>
                                        <TouchableOpacity>
                                        <AntDesign name="heart" size={24} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign name="comment" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>  



                        </View>
                        
                    )

                     }}
                     />   
                    </View>
                </View>                
            </SafeAreaView>
        </SafeAreaProvider>
    )
}




