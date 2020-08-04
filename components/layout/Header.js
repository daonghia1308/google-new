import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconBox}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Image
                        style={styles.iconGoBack}
                        source={require("../../Icons/back.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{title}</Text>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    iconBox: {
        flex: 0,
    },
    titleBox: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: 25,
    },
    iconGoBack: {
        alignSelf: "flex-start",
        width: 20,
        height: 20,
    }
})

export default Header;