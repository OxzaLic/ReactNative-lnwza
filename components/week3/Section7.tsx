import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding: 20 }}>
            <View>
                <Text style={{ fontSize: 25, color: "black", textAlign: 'left', fontWeight: 'bold' }}>Rome Type</Text>
            </View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 125, height: 150, borderRadius: 20 }} source={require("@/assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <View style={{ alignContent="flex-end" }}></View>
                    <Text style={{ fontSize: 20, color: '#DE5139' }}>$399.99</Text>
                    <Text style={{ fontSize: 15 }}>Hurry Up! This is your last room!</Text>
                    </View>
    
                </View>



            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }} source={require("@/assets/week3/trip-2.jpg")} />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>Overseas Adventure Travel In Nepal</Text>
                <Text style={{ color: '#444444' }}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo</Text>
            </View>
        </View>
    );
}
