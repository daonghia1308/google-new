import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

const Card = props => {
    const backgroundColor = {
        backgroundColor: props.type == 1 ? "#E437BC" : props.type == 2 ? "#EFA75A" : "#23E3D6"
    }
    return (
        <View style={[styles.container, backgroundColor]}>
            <Text style={styles.textCardTitle}>{props.name}</Text>
            <Text style={styles.textCardTotal}>{props.total}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "30%",
        height: 90,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    textCardTitle: {
        color: "white",
        fontSize: 18
    },
    textCardTotal: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    }
})
export default Card;