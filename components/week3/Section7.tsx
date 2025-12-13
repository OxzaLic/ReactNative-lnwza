import React from "react";
import { Image, Text, View } from "react-native";

export default function Card() {
    return (
        <View style={{ margin: 20, padding: 10, marginTop: -20, }}>
            <View style={{ marginBottom: 10 }}>
                <Text
                    style={{
                        fontSize: 20,
                        color: "black",
                        textAlign: "left",
                        fontWeight: "bold",
                    }}
                >
                    Room Type
                </Text>
            </View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row" }}>
                <Image
                    style={{ width: 80, height: 100, borderRadius: 10 }}
                    source={require("@/assets/week3/room-8.jpg")}
                />
                <View
                    style={{ flex: 1, paddingLeft: 10, justifyContent: "space-between" }}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Standard Twin Room
                    </Text>
                    <View>
                        <Text
                            style={{ fontSize: 20, color: "#DE5139", fontWeight: "bold" }}
                        >
                            $399.99
                        </Text>
                        <Text style={{ fontSize: 15, color: "#3d7994ff" }}>
                            Hurry Up! This is your last room!
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}