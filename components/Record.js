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

const Record = props => {
    const backgroundColor = {
        backgroundColor: props.type == 1 ? "#FEC180" : props.type == 2 ? "#EFBAD3" : "#54BAE6"
    }
    return (
        <View style={styles.container}>
            <View style={[styles.boxIcon, backgroundColor]}>
                <Image
                    style={styles.imageIcon}
                    source={props.type == 1 ? require("../Icons/cart.png") : props.type == 2 ? require("../Icons/clothes.png") : require("../Icons/house.png")}
                />
            </View>
            <View style={styles.boxContent}>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>{props.name}</Text>
                    <Text style={styles.paymentMethod}>{props.payment_method}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.time}>{props.time}</Text>
                    <Text style={styles.money}>{props.money}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginBottom: 15
    },
    boxContent: {
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        minHeight: 100,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        width: "93%",
        borderRadius: 15,
        alignSelf: "flex-end",
        paddingLeft: "17%",
        paddingRight: "5%",
        flexDirection: "row"
    },
    imageIcon: {
        width: 40,
        height: 40
    },
    boxIcon: {
        backgroundColor: "#FEC180",
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        borderRadius: 10,
        elevation: 3
    },
    contentTitle: {
        fontSize: 25
    },
    paymentMethod: {
        fontSize: 15,
        color: "#A6B1C0"
    },
    content: {
        flex: 0.5,
        justifyContent: "center"
    },
    detail: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    time: {
        fontSize: 18,
        color: "#A6B1C0"
    },
    money: {
        fontSize: 15,
        color: "#FF958F"
    }
})

export default Record;