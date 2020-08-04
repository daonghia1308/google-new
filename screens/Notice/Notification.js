import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Header from "../../components/layout/Header"
const Notification = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title="Notification" navigation={navigation} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        paddingLeft: 15,
        paddingRight: 15
    },
})
export default Notification;