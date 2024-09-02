import react from "react";
import { View,Text,Dimensions } from "react-native";
const { width } = Dimensions.get('window');

function MainHeader({title}){
return(
    <View style={{height:60,width:width,justifyContent:"flex-end",alignItems:"center",backgroundColor:"#e33fa1"}}>
<Text style={{color:"white",fontSize:17,fontWeight:"bold",marginBottom:10 }}>
{title}
</Text>
    </View>
)
}
export default MainHeader