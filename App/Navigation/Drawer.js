import React from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator
} from "react-navigation";

import { Constants } from "expo";

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HOME</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.openDrawer()}
            >
                <Text style={styles.btnText}>Open Drawer</Text>
            </TouchableOpacity>
        </View>
    );
}

function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.openDrawer()}
            >
                <Text style={styles.btnText}>Open Drawer</Text>
            </TouchableOpacity>
        </View>
    );
}

const Drawer = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerLabel: "Home",
            drawerIcon: () => <FontAwesome name="home" size={20} color="red" />
        }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            drawerLabel: "Dashboard",
            drawerIcon: () => (
                <FontAwesome name="dashboard" size={20} color="purple" />
            )
        }
    }
});

function LukeStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    );
}

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LukeStatusBar
                    backgroundColor="purple"
                    barStyle="light-content"
                />
                <Drawer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        alignItems: "center",
        justifyContent: "center"
    }
});
