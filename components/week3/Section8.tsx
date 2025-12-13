import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Menu() {
    return (
        <View
            style={{
                margin: 20,
                padding: 10,
                marginTop: 0,
                borderTopWidth: 1,
                borderTopColor: "#cccccc",
            }}
        >
            {/* View ก้อนที่ 1  */}
            <View
                style={{
                    flexDirection: "row",
                    padding: 1,
                    justifyContent: "space-between",
                }}
            >
                <View>
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
                        Price
                    </Text>
                    <Text style={{ fontSize: 20, color: "#DE5139", fontWeight: "bold" }}>
                        $399.99
                    </Text>
                    <Text style={{ fontSize: 12, color: "black", fontWeight: "bold" }}>
                        AVG/Night
                    </Text>
                </View>

                <TouchableOpacity>
                    <View
                        style={{
                            height: 50,
                            width: 120,
                            borderRadius: 8,
                            backgroundColor: "#DE5139",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ fontSize: 18, color: "white" }}>Book Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}