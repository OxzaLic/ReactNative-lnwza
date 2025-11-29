import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Menu() {
    return (
        <View style={{ margin: 20, padding: 10,borderWidth: 1, borderColor: 'gray', borderRadius: 20 ,backgroundColor: 'white'}}>
            {/* View ก้อนที่ 1 */}
            <View>
                <Text style={{fontSize: 25, color : "black", textAlign: 'center',fontWeight: 'bold'}}>Hilton San Francisco</Text>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row",justifyContent:'center',marginTop: 10  }}>
                <FontAwesome name={"star"} size={20} color={"orange"} />
                <FontAwesome name={"star"} size={20} color={"orange"} />
                <FontAwesome name={"star"} size={20} color={"orange"} />
                <FontAwesome name={"star"} size={20} color={"orange"} />
                <FontAwesome name={"star"} size={20} color={"orange"} />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{textAlign: 'center'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text> 

            </View>
        </View>
    );
}
