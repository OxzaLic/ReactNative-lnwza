import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { Callout, Marker } from "react-native-maps";

export default function UserMarkers(props:any) {

  return props.items.map((item:any) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.name}
      key={item.id.toString()}
      description={item.address}
    >
        <FontAwesome name="user" size={20} color="tomato" />
        <Callout>
            <View style={{ padding: 5, minWidth: 250, alignItems: 'center' }}>
              <Text>User ID: {item.user_id}</Text> 
            </View>
          </Callout>
    </Marker>
  ));
}
