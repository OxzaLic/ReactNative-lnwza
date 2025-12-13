import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {

    const [onlineEvent, setOnlineEvent] = useState([]);
    const loadOnlineEvent = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await text.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineEvent(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineEvent();
    }, []);



    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up Coming Events</Text>
            <Text style={{ color: "grey" }}>What's the Worst That Could Happend</Text>
            <FlatList
                horizontal={true}
                // data={tours}
                data={onlineEvent}
                renderItem={
                    ({ item, index }: any) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 300, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: -30, paddingHorizontal: 10, backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <View style={{ padding: 2, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, color: "red",fontWeight:'bold' }}>{item.month}</Text>
                                        <Text style={{ fontSize: 15, color: "gray" }}>{item.date}</Text>

                                    </View>
                                    <View style={{ padding: 2, alignContent: 'flex-start' }}>
                                        <Text style={{ fontSize: 20, color: "black",fontWeight:'bold' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 15, color: "gray" }}>{item.datetime}</Text>
                                        <Text style={{ fontSize: 15, color: "gray" }}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={(item: any) => item.id}
            />










        </View>
    );
}


