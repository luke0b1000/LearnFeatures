import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation";

import {Constants} from 'expo'

function Home() {
    return (
        <View style={styles.container}>
            <Text>HOME</Text>
        </View>
    );
}

function Dashboard() {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
        </View>
    );
}

const Hello = () => (
    <View style={styles.container}>
        <Text>Hello</Text>
    </View>
);

const Tabs = createBottomTabNavigator(
    {
        Home: {
            screen: Home
        },
        Dashboard: {
            screen: Dashboard
        },
        Hello: {
            screen: Hello
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case "Home":
                        iconName = "home";
                        break;
                    case "Dashboard":
                        iconName = "dashboard";
                        break;
                    case "Hello":
                        iconName = "crosshairs";
                        break;
                }
                return <FontAwesome name={iconName} size={30} color="red" />;
            }
        }),
        tabBarOptions: {
            activeTintColor: "red",
            inactiveTintColor: "purple"
        }
    }
);

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
                <Tabs style={styles.tab} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
