import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,Image,StyleSheet,Dimensions } from "react-native";
import { Link } from "expo-router";

const screenWidth = Dimensions.get("window")

export default function Index (){
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        {/* header */}
      <View>
        <Text>Stitc Flow</Text>
        <Text>your fashion partner</Text>
     </View>
          {/* body */}
          <View>
            <Image
            source={require("../assets/images/stitchlg.png")}
            style={myStyles.logo}
            />
           </View>
          <View>
            <Text>When you choose stitch Flow fashion, you're choosing ease,comfort and relaibility</Text>
          </View>
          {/* bottom */}
          <View>
            <Link href="/(tabs)/homepage">
              <Text>GET STARTED</Text>
            </Link>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
} 

const myStyles = StyleSheet.create({
  logo:{
    width:screenWidth,
    height:420
  }
})





