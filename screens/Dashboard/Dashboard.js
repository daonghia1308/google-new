import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Card from "../../components/Card"
import Record from "../../components/Record"
const data = require("../../data");

const Dashboard = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Record type={item.type} icon={item.icon} name={item.name} payment_method={item.payment_method} time={item.time} money={item.money} />
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.iconImage}
                    source={require("../../Icons/menu.png")}
                />
                <Text style={styles.headerText}>Dashboard</Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Notification") }}
                >
                    <Image
                        style={styles.iconImage}
                        source={require("../../Icons/notification.png")}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.listAccount}>
                <Text style={styles.listAccountText}>List of Account</Text>
                <View style={styles.listCard}>
                    {
                        data.account_information.map((e) => {
                            return <Card name={e.name} total={e.total} type={e.type} key={e.id} />
                        })
                    }
                </View>
            </View>
            <View style={styles.balance}>
                <Text style={styles.totalBalance}>{data.total}</Text>
                <Text style={styles.textTotal}>Total Balance</Text>
            </View>
            <View style={styles.recordOverview}>
                <Text style={styles.recordOverviewText}>Last Records Overview</Text>
                <FlatList
                    data={data.record}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
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
    header: {
        flex: 0.15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    headerText: {
        fontSize: 28
    },
    iconImage: {
        width: 30,
        height: 30,
    },
    listAccount: {
        flex: 0.25,
    },
    listCard: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    listAccountText: {
        fontSize: 25,
        marginBottom: 30
    },
    balance: {
        flex: 0.2,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        borderRadius: 10
    },
    totalBalance: {
        color: "#FF958F",
        fontSize: 50
    },
    textTotal: {
        color: "#A6B1C0",
        fontSize: 25
    },
    recordOverview: {
        flex: 0.4,
        marginTop: 30,
        flexDirection: "column"
    },
    recordOverviewText: {
        fontSize: 25,
        marginBottom: 12
    }
})
export default Dashboard;