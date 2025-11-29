import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ margin: 20, padding: 10 }}>
            {/* View ก้อนที่ 1 */}
            <View>
                <Text style={{ fontSize: 25, color: "black", textAlign: 'left', fontWeight: 'bold' }}>Location</Text>
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 15, textAlign: 'left' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            <View style={{ flexDirection: "row", }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 }} source={require("@/assets/week3/map.jpg")} />
            </View>
        </View>
    );
}
