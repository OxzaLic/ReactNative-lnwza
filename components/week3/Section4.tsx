import React from 'react';
import { Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={{ margin: 20, padding: 10}}>
            {/* View ก้อนที่ 1 */}
            <View>
                <Text style={{fontSize: 25, color : "black", textAlign:'left',fontWeight: 'bold'}}>Hotel Description</Text>
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ flexDirection: "row" }}>
                <Text style={{fontSize: 15,textAlign: 'left'}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text> 
            </View>
        </View>
    );
}
