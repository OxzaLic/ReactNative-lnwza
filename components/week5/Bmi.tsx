import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [bmiStatus, setBmiStatus] = useState('—');
    console.log("STATE : ", weight, height, bmi, bmiStatus);

    const [likeCount, setLikeCount] = useState(0);


    const getBmiStatus = (bmiValue: string) => {
        const value = parseFloat(bmiValue);
        let status;
        let color;
        if (value === 0 || isNaN(value) || !isFinite(value)) {
            status = '—';
        } else if (value < 18.5) {
            status = 'UNDERWEIGHT';
        } else if (value >= 18.5 && value <= 24.9) {
            status = 'NORMAL';
        } else if (value >= 25 && value <= 29.9) {
            status = 'OVERWEIGHT';
        } else if (value >= 30 && value <= 34.9) {
            status = 'OBESE';
        } else { // >= 35
            status = 'EXTREMELY OBESE';
        }
        return { status };

    };


    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        const w = parseFloat(weight);
        const h = parseFloat(height);
        let output = (w / (h / 100 * h / 100));

        const bmiResult = output.toFixed(2);
        setBmi(bmiResult);

        const { status } = getBmiStatus(bmiResult);
        setBmiStatus(status);

    };


    const handleHeartPress = () => {
        setLikeCount(prevCount => prevCount + 1);
    };


    return (
        <View style={{}}>
            <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 8, elevation: 2, justifyContent: 'space-around', height: 150 }}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}> Weight (kg.)</Text>
                <TextInput
                    value={weight}
                    keyboardType="numeric"
                    placeholder="Input your weight" style={{ fontSize: 20 }}
                    onChangeText={(newWeight) => setWeight(newWeight)}
                />
            </View>


            <View style={{ padding: 20, marginVertical: 20, backgroundColor: 'white', borderRadius: 8, elevation: 2, justifyContent: 'space-around', height: 150 }}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}> Height (cm.)</Text>
                <TextInput
                    value={height}
                    keyboardType="numeric"
                    placeholder="Input your Height …" style={{ fontSize: 20 }}
                    onChangeText={(newHeight) => setHeight(newHeight)}
                />
            </View>


            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ flex: 1, padding: 20, marginRight: 20, backgroundColor: 'white', borderRadius: 8, elevation: 2, justifyContent: 'center', alignItems: 'center', height: 150 }}>
                    <Text style={{ fontSize: 50, fontWeight: '400' }}> {bmi}</Text>
                </View>
                <View style={{ flex: 1, padding: 20, backgroundColor: 'white', borderRadius: 8, elevation: 2, justifyContent: 'center', alignItems: 'center', height: 150 }}>
                    <Text style={{ fontSize: 30, fontWeight: '400' }}>{bmiStatus}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "green", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }}>
                <TouchableOpacity onPress={handleHeartPress} >
                    <FontAwesome
                        name="heart"
                        size={60}
                        color={likeCount > 0 ? '#E91E63' : '#CCCCCC'}
                    />
                </TouchableOpacity>

                {/* View (row, padding, space-around) - ใช้ flex:1 เพื่อให้เต็มพื้นที่ */}
                <View style={[{ marginRight: 10 }]}>
                    <Text style={{ fontSize: 50 }}>
                        {likeCount}
                    </Text>
                </View>

                {/* TouchableOpacity + FontAwesome Icon */}


            </View>









        </View>

    );
}